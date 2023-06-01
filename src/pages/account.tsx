import PageContainer from "@components/container/PageContainer";
import PageContent from "@components/layout/PageContent";
import PageHeader from "@components/layout/PageHeader";
import { useAccountsStore } from "@stores/accounts";
import Head from "next/head";
import { ReactElement } from "react";

export default function AccountPage(): ReactElement {
  const { account } = useAccountsStore((state) => ({ account: state.account }));
  const username = `${account.first_name} ${account.last_name}`;

  return (
    <>
      <Head>
        <title>Edumation - Your account</title>
      </Head>
      <PageContainer>
        <PageHeader>
          <h1>Account</h1>
        </PageHeader>
        <PageContent>
          <h2>{username}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel ante vel magna condimentum sodales. Cras eget mi at felis
            laoreet blandit sit amet sit amet lacus. Nullam aliquam lectus
            euismod ultricies iaculis. Phasellus ac metus quis neque lobortis
            finibus sit amet a urna. Donec a eleifend ipsum. Fusce rutrum lacus
            libero. Integer id laoreet urna.
          </p>
          <p>
            Nulla eu odio luctus risus interdum vulputate sit amet in tellus.
            Sed feugiat, tellus sollicitudin dictum placerat, sapien ante
            iaculis justo, quis sagittis mi lacus a elit. Praesent at nisi
            lobortis, ornare ante non, vulputate risus. Phasellus malesuada nibh
            et felis condimentum, at volutpat dolor iaculis. Nunc laoreet
            sodales est cursus egestas. Quisque et neque vitae dolor eleifend
            suscipit non ut nulla. Nam aliquet lorem vitae ligula facilisis
            commodo. Suspendisse maximus mauris sit amet nunc auctor molestie
            nec sed felis.
          </p>
        </PageContent>
      </PageContainer>
    </>
  );
}
