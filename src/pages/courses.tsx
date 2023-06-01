import PageContainer from "@components/container/PageContainer";
import PageHeader from "@components/layout/PageHeader";
import JWTIFrame from "@components/thirdParty/metabase/JWTIFrame";
import { APP_STYLES } from "@constants/metabase";
import Head from "next/head";
// import Button from "@components/ui/buttons/Button";
import { ReactElement } from "react";

export default function CoursesPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Edumation - Courses</title>
      </Head>
      <PageContainer fullHeight>
        <PageHeader>
          <h1>Courses</h1>
          <p>
            View all of the courses you oversee. Click on a course id to go to
            its dashboard.
          </p>
          {/* <Button onClick={() => alert("New course")}>
          <span className="default">New</span>
          <span className="md">New course</span>
        </Button> */}
        </PageHeader>

        <JWTIFrame
          // return_to="/public/question/e57cd517-9526-4c44-b989-be6482ff22e1"
          returnTo="/question/14-courses"
          appStyles={APP_STYLES}
          iFrameStyles={{
            fullHeight: true,
          }}
        />
      </PageContainer>
    </>
  );
}
