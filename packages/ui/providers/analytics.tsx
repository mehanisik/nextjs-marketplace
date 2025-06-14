import type { ReactNode } from "react";

type AnalyticsProviderProps = {
  children: ReactNode;
};

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  // Add your analytics initialization logic here
  return <>{children}</>;
};
