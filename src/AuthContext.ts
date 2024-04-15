import { createContext } from "react";

export const anonymusUser = {
    name: "Anonym"
}

export interface AuthInfo {
    user: {
        name: string;
    }
}

export const AuthContext = createContext<AuthInfo>({ user: anonymusUser, })