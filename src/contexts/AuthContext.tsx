import { createContext, ReactNode, useReducer } from "react";
import { AuthState,authReducer } from "../reducer/AuthReducer";

import { AuthActionType } from "../store/types/type";
const { TOGGLE_AUTH } = AuthActionType;
interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextDefault {
  authInfo: AuthState;
  toggleAuth: (userName: string) => void;
}

const authDefault = {
  isAuthenticated: false,
  userName: "",
};

export const AuthContext = createContext<AuthContextDefault>({
  authInfo: authDefault,
  toggleAuth: () => {},
});

const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [authInfo, dispatch] = useReducer(authReducer, authDefault);

  const toggleAuth = (userName: string) =>
    dispatch({ type: TOGGLE_AUTH, payload: userName });

  const authContextData = {
    authInfo,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
