import { type InternalContextType } from "../types";
import { InternalContext } from "./context";

export const InternalStateProvider = ({
  context,
  children,
}: {
  context: InternalContextType;
  children: React.ReactNode;
}) => {
  return (
    <InternalContext.Provider value={context}>
      {children}
    </InternalContext.Provider>
  );
};
