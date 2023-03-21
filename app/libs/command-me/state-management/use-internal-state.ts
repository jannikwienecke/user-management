import React from "react";
import { InternalContext } from "./context";

export const useInternalContext = () => {
  return React.useContext(InternalContext);
};
