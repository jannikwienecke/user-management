import type { ActionArgs, LoaderArgs } from "@remix-run/server-runtime";

export type App = "User" | "System";

export type Command<T = {}> = {
  name: string;
  title: string;
  description: string;
  shortcut?: string[];
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  hideSearch?: boolean;
  mode: {
    type: "view" | "no-view";
    id: string;
    loader?: (props: LoaderArgs) => Promise<T>;
    view?: (props: T | undefined) => JSX.Element;
  };
};

export type ModuleConfig<T> = {
  name: string;
  title: string;
  description: string;
  author: string;
  categories: string[];
  license: string;
  commands: Command<T>[];
  actions: Action<any>[];
};

export type GlobalConfig = {
  modules: ModuleConfig<any>[];
};

export type InternalContextType = {
  globalConfig: GlobalConfig;
  query: string;
  enterRawQuery: (value: string) => void;
  command?: Command;
  pageData?: unknown;
  handleClickCommand: (command: Command) => void;
  commands: Command[];
};

export interface Action<T> {
  type: string;
  handler: (props: ActionArgs & T) => Promise<unknown>;
}

export type ArgumentsOfAction<T extends Action<any>> = Omit<
  Parameters<T["handler"]>[0],
  "request" | "params" | "context"
>;

export type ReturnTypeOfAction<T extends Action<any>> = ReturnType<
  T["handler"]
>;
