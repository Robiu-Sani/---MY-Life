import { createContext } from "react";

export const AuthContext = createContext();
export default function Context({ children }) {
  const ContextData = {
    test: "context is working",
  };
  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
}
