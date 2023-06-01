import PageContainer from "@components/container/PageContainer";
import PageHeader from "@components/layout/PageHeader";
import JWTIFrame from "@components/thirdParty/metabase/JWTIFrame";
import { APP_STYLES } from "@constants/metabase";
import Head from "next/head";
// import Button from "@components/ui/buttons/Button";
import { ReactElement } from "react";

export default function AssignmentsPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Edumation - Assignments</title>
      </Head>
      <PageContainer fullHeight>
        <PageHeader>
          <h1>Assignments</h1>
          <p>
            View assignments in your courses. Click on an assignment id to see
            its dashboard.
          </p>
          {/* <Button onClick={() => alert("New assignment")}>
          <span className="default">New</span>
          <span className="md">New assignment</span>
        </Button> */}
        </PageHeader>

        <JWTIFrame
          // return_to="/public/question/ed4796e4-f5ed-4b53-b056-0b8862054c98"
          returnTo="/question/15-assignments"
          appStyles={APP_STYLES}
          iFrameStyles={{
            fullHeight: true,
          }}
        />
      </PageContainer>
    </>
  );
}
