import { type ActionArgs } from "@remix-run/server-runtime";
import type { ModuleConfig } from "../types";

export const createConfig = <T>(config: ModuleConfig<T>) => {
  return config;
};

export const createRemixAction = <
  T extends {
    type: string;
    handler: (props: ActionArgs & any) => Promise<any>;
  }
>(
  action: T
) => {
  return {
    ...action,
  };
};
