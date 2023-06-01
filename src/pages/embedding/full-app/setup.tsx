import PageContainer from "@components/container/PageContainer";
import PageHeader from "@components/layout/PageHeader";
import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import { sign } from "jsonwebtoken";
import ImageWrapper from "@components/ui/ImageWrapper";
import { getAppUrl } from "@components/thirdParty/metabase/utils";

const iFrameCodeFullAppSign = `const jsonwebtoken = sign(
  {
    id: <id>,
    email: <email>,
    first_name: <first name>,
    last_name: <last name>,
    groups: ["Read Only"],
    expiresIn: "2 days",
  },
  <JWT shared secret key>,
);`;

const iFrameCodeFullApp = `<iframe
  src="https://<DNS alias>.metabaseapp.com/auth/sso?jwt=<jsonwebtoken>&return_to=<path>"
  allowtransparency
  frameborder="0"
  height=<height>
  width=<width>
/>`;

export default function SimpleEmbeddingPage(): ReactElement {
  const [theJWT, setTheJWT] = useState<string>();
  useEffect(() => {
    const METABASE_JWT_SHARED_SECRET = process.env.METABASE_JWT_SHARED_SECRET;
    const jwt = sign(
      {
        id: 1000000,
        email: "dummy.user@metabase.com",
        first_name: "Dummy",
        last_name: "User",
        groups: ["Read Only"],
        expiresIn: "2 days",
      },
      METABASE_JWT_SHARED_SECRET,
    );
    setTheJWT(jwt);
  }, []);

  return (
    <>
      <Head>
        <title>Edumation - Full app embedding setup</title>
      </Head>
      <PageContainer fullHeight>
        <PageHeader>
          <h1>Full app embedding setup</h1>
          <p>
            See full app embedding{" "}
            <a
              href="https://www.metabase.com/docs/latest/embedding/full-app-embedding"
              target="_blank"
              rel="noreferrer"
            >
              docs
            </a>
            .
          </p>

          <ol>
            <li>
              <p>
                Setup{" "}
                <a
                  href="https://embedding-demo.metabase.com/admin/people/groups"
                  target="_blank"
                  rel="noreferrer"
                >
                  groups
                </a>
                ,{" "}
                <a
                  href="https://embedding-demo.metabase.com/admin/permissions/data/group"
                  target="_blank"
                  rel="noreferrer"
                >
                  permissions
                </a>{" "}
                and create{" "}
                <a
                  href="https://embedding-demo.metabase.com/admin/people"
                  target="_blank"
                  rel="noreferrer"
                >
                  users
                </a>
              </p>
            </li>
            <li>
              <p>
                Get your JWT shared secret from your{" "}
                <a
                  href="https://embedding-demo.metabase.com/admin/settings/embedding-in-other-applications/standalone"
                  target="_blank"
                  rel="noreferrer"
                >
                  Metabase instance
                </a>
                :
              </p>
              <ImageWrapper
                src="/images/settings.jpg"
                alt="Metabase - Embedding settings"
              />
            </li>
            <li>
              <p>
                Request your JWT using the jsonwebtoken package (
                <a
                  href="https://cdnjs.com/libraries/jsonwebtoken"
                  target="_blank"
                  rel="noreferrer"
                >
                  cdn
                </a>{" "}
                or{" "}
                <a
                  href="https://www.npmjs.com/package/jsonwebtoken"
                  target="_blank"
                  rel="noreferrer"
                >
                  npm
                </a>
                )
              </p>
              <pre>
                <code>{iFrameCodeFullAppSign}</code>
              </pre>
            </li>
            <li>
              <p>Use the JWT from the response to load the iframe:</p>
              <pre>
                <code>{iFrameCodeFullApp}</code>
              </pre>
            </li>
          </ol>
        </PageHeader>

        {theJWT && (
          <iframe
            src={`${getAppUrl()}/auth/sso?jwt=${theJWT}&return_to=/dashboard/1-overview`}
            allowTransparency
            frameBorder="0"
            height={500}
            width="100%"
          ></iframe>
        )}
      </PageContainer>
    </>
  );
}
