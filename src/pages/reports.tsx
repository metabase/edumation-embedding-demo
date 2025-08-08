import PageContainer from "@components/container/PageContainer";
import JWTIFrame from "@components/thirdParty/metabase/JWTIFrame";
import { APP_STYLES } from "@constants/metabase";
import Head from "next/head";
import { ReactElement } from "react";

export default function ReportsPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Edumation - Reports</title>
      </Head>
      <PageContainer fullHeight>
        <JWTIFrame
          returnTo="/collection/2-your-reports"
          appStyles={{
            ...APP_STYLES,
            logo: false,
            new_button: true,
            side_nav: true,
            top_nav: true,
            entity_types: "model",
          }}
          iFrameStyles={{ fullHeight: true }}
        />
      </PageContainer>
    </>
  );
}
