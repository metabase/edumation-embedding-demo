import PageContainer from "@components/container/PageContainer";
import PageHeader from "@components/layout/PageHeader";
import JWTIFrame from "@components/thirdParty/metabase/JWTIFrame";
import { QUERY_PARAMETERS } from "@components/thirdParty/metabase/JWTIFrame/constants";
import { JWTIFrameStylePropsType } from "@components/thirdParty/metabase/JWTIFrame/types";
import { getQueryParams } from "@components/thirdParty/metabase/JWTIFrame/utils";
import Checkbox from "@components/ui/form/Checkbox";
import Select from "@components/ui/form/Select";
import HorizontalList from "@components/ui/list/HorizontalList";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";
import Link from "next/link";

const APP_PAGES = [
  { type: "dashboard", url: "/dashboard/1-overview" },
  { type: "question", url: "/question/15-assignments" },
  { type: "collection", url: "/collection/2-your-reports" },
];

export default function FullAppEmbeddingPage(): ReactElement {
  const router = useRouter();
  const { query } = router;

  const changeQueryParam = useCallback(
    (key, value) => {
      const updatedQuery = { ...query };
      if (value) {
        updatedQuery[key] = value;
      } else {
        delete updatedQuery[key];
      }

      router.push({
        query: updatedQuery,
      });
    },
    [router, query],
  );

  // app
  const appPage = APP_PAGES.find(({ type }) => type === query.type);
  const appUrl = appPage?.url;

  // styles
  const [appStyles, setAppStyles] = useState<JWTIFrameStylePropsType>();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const updatedQueryParams = {};
      QUERY_PARAMETERS.forEach((param) => {
        updatedQueryParams[param] = Boolean(query[param] || false);
      });
      setAppStyles(updatedQueryParams);
    }, 750);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  // code
  const queryParams = getQueryParams(appStyles, true);
  const iFrameCode = `// app url: <metabase instance url>/<path>${queryParams}
<iframe
  src="<metabase instance url>/auth/sso?jwt=<token>&return_to=<encoded app url>"
  allowtransparency
  frameborder="0"
  height="<height>"
  width="<width>">
</iframe>`;

  return (
    <>
      <Head>
        <title>Edumation - Full app embedding</title>
      </Head>
      <PageContainer fullHeight>
        <PageHeader>
          <h1>Full app embedding</h1>
          <p>
            See full app embedding{" "}
            <Link href="/embedding/full-app/setup">setup</Link> page or{" "}
            <a
              href="https://www.metabase.com/docs/latest/embedding/full-app-embedding"
              target="_blank"
              rel="noreferrer"
            >
              docs
            </a>
            .
          </p>
          <HorizontalList>
            <li>
              <Select
                value={query["type"] || ""}
                onChange={(e) =>
                  changeQueryParam("type", e.currentTarget.value)
                }
              >
                <option value="">---</option>
                {APP_PAGES.map(({ type }, index) => (
                  <option key={`page_${index}`} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </li>
          </HorizontalList>
          <HorizontalList>
            {QUERY_PARAMETERS.map((param, index) => (
              <li key={index}>
                <Checkbox
                  id={param}
                  name={param.split("_").join(" ")}
                  checked={query[param] === "true"}
                  onChange={changeQueryParam}
                />
              </li>
            ))}
          </HorizontalList>

          <pre>
            <code>{iFrameCode}</code>
          </pre>
        </PageHeader>

        <JWTIFrame
          returnTo={appUrl}
          appStyles={appStyles}
          iFrameStyles={{ fullHeight: true }}
        />
      </PageContainer>
    </>
  );
}
