import { createContext } from "react";
import { IJWTContextProps } from "./type";

const JWTContext = createContext<IJWTContextProps>({ jwt: "" });

export default JWTContext;
