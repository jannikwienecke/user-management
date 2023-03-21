import type { Action, ModuleConfig } from "../types";

export const createConfig = <T, Actions extends Action[]>(
  config: ModuleConfig<T, Actions>
) => {
  return config;
};
