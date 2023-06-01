import PageContainer from "@components/container/PageContainer";
import PageContent from "@components/layout/PageContent";
import PageHeader from "@components/layout/PageHeader";
import JWTIFrame from "@components/thirdParty/metabase/JWTIFrame";
import { APP_STYLES } from "@constants/metabase";
import { useAccountsStore } from "@stores/accounts";
import { ReactElement } from "react";

export default function IndexPage(): ReactElement {
  const { account } = useAccountsStore((state) => ({ account: state.account }));

  return (
    <PageContainer>
      <PageHeader>
        <h1>Welcome, {account.first_name}</h1>
        <p>
          Welcome to your platform for seamlessly managing student success
          across all of your courses. Reporting and analytics allow you to see
          how your students are doing in real-time.
        </p>
      </PageHeader>

      <PageContent>
        <h2>Active course stats</h2>
      </PageContent>

      <JWTIFrame
        returnTo="/dashboard/1-overview"
        appStyles={APP_STYLES}
        iFrameStyles={{
          height: 1592,
          mdHeight: 776,
          xlRatio: 1429 / 800,
        }}
      />
    </PageContainer>
  );
}
