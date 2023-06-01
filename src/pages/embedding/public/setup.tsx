import PageContainer from "@components/container/PageContainer";
import PageHeader from "@components/layout/PageHeader";
import { getAppUrl } from "@components/thirdParty/metabase/utils";
import Head from "next/head";
import { ReactElement } from "react";

const iFrameCodePublic = `<iframe
  src="https://<DNS alias>.metabaseapp.com/public/<path>"
  allowtransparency
  frameborder="0"
  height=<height>
  width=<width>
/>`;

export default function PublicEmbeddingSetupPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Edumation - Public embedding setup</title>
      </Head>
      <PageContainer fullHeight>
        <PageHeader>
          <h1>Public embedding setup</h1>
          <p>
            See public embedding{" "}
            <a
              href="https://www.metabase.com/docs/latest/questions/sharing/public-links"
              target="_blank"
              rel="noreferrer"
            >
              docs
            </a>
            .
          </p>

          <pre>
            <code>{iFrameCodePublic}</code>
          </pre>
        </PageHeader>

        <iframe
          src={`${getAppUrl()}/public/question/88bbf0d1-8982-47a9-9914-dbc29af6b36c`}
          allowTransparency
          frameBorder="0"
          height={500}
          width="100%"
        />
      </PageContainer>
    </>
  );
}
