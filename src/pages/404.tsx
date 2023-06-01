import PageContainer from "@components/container/PageContainer";
import PageHeader from "@components/layout/PageHeader";
import Link from "next/link";
import { ReactElement } from "react";

export default function Error404Page(): ReactElement {
  return (
    <PageContainer>
      <PageHeader>
        <h1>Page not found</h1>
        <p>
          <Link href="/">Back?</Link>
        </p>
      </PageHeader>
    </PageContainer>
  );
}
