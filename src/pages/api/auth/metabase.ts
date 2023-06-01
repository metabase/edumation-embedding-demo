import type { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import { format } from "url";
import { getAppUrl } from "@components/thirdParty/metabase/utils";
import {
  DEFAULT_EXPIRATION,
  DUMMY_USER,
} from "@components/thirdParty/metabase/utils/constants";
import { IUseJWTLoginProps } from "@components/thirdParty/metabase/hooks/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const {
    appId,
    user = DUMMY_USER,
    returnTo = "/",
    expiresIn = DEFAULT_EXPIRATION,
  } = req.body as IUseJWTLoginProps;
  if (req.method === "POST") {
    const METABASE_JWT_SHARED_SECRET =
      process.env.METABASE_JWT_SHARED_SECRET || "Not JWT secret key";

    const appUrl = getAppUrl(appId);
    const jwt = sign(
      {
        ...user,
        expiresIn,
      },
      METABASE_JWT_SHARED_SECRET,
    );

    res.status(200).json({
      jwt,
      url: format({
        pathname: `${appUrl}/auth/sso`,
        query: {
          jwt,
          return_to: `${
            returnTo && returnTo.includes("http") ? "" : appUrl
          }${returnTo}`,
        },
      }),
    });
  }
  // error
  else {
    res.status(500).send(`"${req.method}" requests are not allowed`);
  }
}
