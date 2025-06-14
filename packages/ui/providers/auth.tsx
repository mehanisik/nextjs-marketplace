import { type ReactNode, createContext, useContext } from "react";

type AuthContextType = {
  privacyUrl?: string;
  termsUrl?: string;
  helpUrl?: string;
};

const AuthContext = createContext<AuthContextType>({});

type AuthProviderProps = {
  children: ReactNode;
  privacyUrl?: string;
  termsUrl?: string;
  helpUrl?: string;
};

export const AuthProvider = ({
  children,
  privacyUrl,
  termsUrl,
  helpUrl,
}: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={{ privacyUrl, termsUrl, helpUrl }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
