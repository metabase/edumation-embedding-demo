import PageContainer from "@components/container/PageContainer";
import PageHeader from "@components/layout/PageHeader";
import PublicIFrame from "@components/thirdParty/metabase/PublicIFrame";
import {
  PUBLIC_IFRAME_STYLE_FONTS,
  PUBLIC_IFRAME_STYLE_THEMES,
} from "@components/thirdParty/metabase/PublicIFrame/constants";
import { IPublicIFrameStyleProps } from "@components/thirdParty/metabase/PublicIFrame/types";
import { getHashParams } from "@components/thirdParty/metabase/PublicIFrame/utils";
import Checkbox from "@components/ui/form/Checkbox";
import Select from "@components/ui/form/Select";
import HorizontalList from "@components/ui/list/HorizontalList";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";

export default function PublicEmbeddingPage(): ReactElement {
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

      router.push({ query: { ...updatedQuery } });
    },
    [router, query],
  );

  // styles
  const [appStyles, setAppStyles] = useState<IPublicIFrameStyleProps>();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAppStyles({
        bordered: query["bordered"] ? true : false,
        titled: query["titled"] ? true : false,
        hide_download_button: query["hide_download_button"] ? true : false,
        theme: query["theme"] ? String(query["theme"]) : undefined,
        font: query["font"] ? String(query["font"]) : undefined,
      } as IPublicIFrameStyleProps);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  // code
  const hashParams = getHashParams(appStyles, true);
  const iFrameCode = `<iframe
  src="<metabase instance url>/<type>/<id>${hashParams}"
  allowtransparency
  frameborder="0"
  height="<height>"
  width="<width>">
</iframe>`;

  return (
    <>
      <Head>
        <title>Edumation - Public embedding</title>
      </Head>
      <PageContainer fullHeight>
        <PageHeader>
          <h1>Public embedding</h1>
          <p>
            See public embedding{" "}
            <Link href="/embedding/public/setup">setup</Link> page or{" "}
            <a
              href="https://www.metabase.com/docs/latest/questions/sharing/public-links"
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
                value={query["theme"] || ""}
                onChange={(e) =>
                  changeQueryParam("theme", e.currentTarget.value)
                }
              >
                <option value="">---</option>
                {PUBLIC_IFRAME_STYLE_THEMES.map((theme, index) => (
                  <option key={`theme_${index}`} value={theme}>
                    {theme}
                  </option>
                ))}
              </Select>
            </li>
            <li>
              <Select
                value={query["font"] || ""}
                onChange={(e) =>
                  changeQueryParam("font", e.currentTarget.value)
                }
              >
                <option value="">---</option>
                {PUBLIC_IFRAME_STYLE_FONTS.map((font, index) => (
                  <option key={`font_${index}`} value={font}>
                    {font}
                  </option>
                ))}
              </Select>
            </li>
          </HorizontalList>
          <HorizontalList>
            <li>
              <Checkbox
                id="bordered"
                name="Bordered"
                checked={query["bordered"] === "true"}
                onChange={changeQueryParam}
              />
            </li>
            <li>
              <Checkbox
                id="titled"
                name="Titled"
                checked={query["titled"] === "true"}
                onChange={changeQueryParam}
              />
            </li>
            <li>
              <Checkbox
                id="hide_download_button"
                name="Hide download button"
                checked={query["hide_download_button"] === "true"}
                onChange={changeQueryParam}
              />
            </li>
          </HorizontalList>

          <pre>
            <code>{iFrameCode}</code>
          </pre>
        </PageHeader>

        <PublicIFrame
          src="/question/88bbf0d1-8982-47a9-9914-dbc29af6b36c"
          appStyles={appStyles}
          iFrameStyles={{ fullHeight: true }}
        />
      </PageContainer>
    </>
  );
}
