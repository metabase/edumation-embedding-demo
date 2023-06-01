import PageContainer from "@components/container/PageContainer";
import PageHeader from "@components/layout/PageHeader";
import {
  IIFramePostMessageFrame,
  IIFramePostMessageLocation,
} from "@components/thirdParty/metabase/IFrame/types";
import JWTIFrame from "@components/thirdParty/metabase/JWTIFrame";
import Button from "@components/ui/buttons/Button";
import Select from "@components/ui/form/Select";
import HorizontalList from "@components/ui/list/HorizontalList";
import { APP_STYLES } from "@constants/metabase";
import Head from "next/head";
import { ReactElement, useCallback, useState } from "react";

const LOCATIONS = [
  {
    name: "overview",
    pathname: "/dashboard/1-overview",
  },
  {
    name: "courses",
    pathname: "/question/14-courses",
  },
  {
    name: "assignments",
    pathname: "/question/15-assignments",
  },
  {
    name: "reports",
    pathname: "/collection/2-your-reports",
  },
];

export default function PostMessageEmbeddingPage(): ReactElement {
  const createLocationObj = useCallback(
    (pathname): IIFramePostMessageLocation => {
      return { metabase: { type: "location", location: pathname } };
    },
    [],
  );

  const [firstLocation] = LOCATIONS;
  const [location, setLocation] = useState<string>(firstLocation.pathname);
  const [locationObj, setLocationObj] = useState<IIFramePostMessageLocation>(
    createLocationObj(firstLocation.pathname),
  );

  const changeLocation = useCallback((pathname) => {
    setLocation(pathname);
    setLocationObj(createLocationObj(pathname));
  }, []);

  const [frameObj, setFrameObj] = useState<IIFramePostMessageFrame>();

  return (
    <>
      <Head>
        <title>Edumation - Full app embedding &amp; post messages</title>
      </Head>
      <PageContainer fullHeight>
        <PageHeader>
          <h1>Full app embedding &amp; post message</h1>
          <p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"
              target="_blank"
              rel="noreferrer"
            >
              Post messages
            </a>{" "}
            are supported with the embedded Metabase iframe.
          </p>
          <ul>
            <li>
              <p>
                All accepted{" "}
                <a
                  href="https://www.metabase.com/docs/latest/embedding/full-app-embedding#supported-postmessage-messages-from-embedded-metabase"
                  target="_blank"
                  rel="noreferrer"
                >
                  post messages
                </a>
              </p>
            </li>
            <li>
              <p>
                Navigate using{" "}
                <a
                  href="https://www.metabase.com/docs/latest/embedding/full-app-embedding#supported-postmessage-messages-to-embedded-metabase"
                  target="_blank"
                  rel="noreferrer"
                >
                  location
                </a>
              </p>
            </li>
          </ul>
          <HorizontalList>
            <li>
              <Select
                value={location}
                onChange={(e) => changeLocation(e.currentTarget.value)}
              >
                <option disabled>Select location</option>
                {LOCATIONS.map(({ name, pathname }, index) => (
                  <option key={`location_${index}`} value={pathname}>
                    {name}
                  </option>
                ))}
              </Select>
            </li>
            <li>
              <Button onClick={() => changeLocation(location)}>
                Refresh {location.split("/")[1]}
              </Button>
            </li>
            <li>
              <Button
                onClick={() =>
                  setFrameObj({
                    metabase: { type: "frame", frame: { mode: "normal" } },
                  })
                }
              >
                Resize iframe content
              </Button>
            </li>
            <li>
              <Button
                onClick={() =>
                  setFrameObj({
                    metabase: {
                      type: "frame",
                      frame: {
                        mode: "fit",
                        height: Math.floor(Math.random() * 1000),
                      },
                    },
                  })
                }
              >
                Resize iframe
              </Button>
            </li>
          </HorizontalList>
        </PageHeader>
        <JWTIFrame
          returnTo="/dashboard/1-overview"
          appStyles={APP_STYLES}
          iFrameStyles={{ fullHeight: true }}
          location={locationObj}
          frame={frameObj}
        />
      </PageContainer>
    </>
  );
}
