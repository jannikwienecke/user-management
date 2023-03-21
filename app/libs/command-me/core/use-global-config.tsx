import React from "react";
import { CommandMeContext } from "./provider";

export const useGlobalConfig = () => {
  const { config } = React.useContext(CommandMeContext);

  if (!config) {
    throw new Error(
      "[useGlobalConfig]: Please wrap your app with CommandMeProvider"
    );
  }

  return config;
};
