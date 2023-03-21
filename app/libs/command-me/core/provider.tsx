import React from "react";
import type { GlobalConfig } from "../types";

export const CommandMeContext = React.createContext(
  {} as {
    config: GlobalConfig;
  }
);

export const CommandMeProvider = ({
  children,
  userGlobalConfig,
}: {
  children: React.ReactNode;
  userGlobalConfig: GlobalConfig;
}) => {
  return (
    <CommandMeContext.Provider
      value={{
        config: userGlobalConfig,
      }}
    >
      {children}
    </CommandMeContext.Provider>
  );
};
