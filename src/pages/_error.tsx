import { ReactElement } from "react";
import Link from "next/link";
import PageContainer from "@components/container/PageContainer";
import PageHeader from "@components/layout/PageHeader";

interface IErrorPage {
  statusCode?: string;
}

export default function ErrorPage({ statusCode }: IErrorPage): ReactElement {
  return (
    <PageContainer>
      <PageHeader>
        <h1>An error occurred{statusCode && ` (${statusCode})`}</h1>
        <p>
          <Link href="/">Back?</Link>
        </p>
      </PageHeader>
    </PageContainer>
  );
}

ErrorPage.getInitialProps = async (contextData) => {
  const { res, err } = contextData;
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
