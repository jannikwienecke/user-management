import type { ActionArgs, LoaderArgs } from "@remix-run/server-runtime";

export type App = "User" | "System";
// export type CommandType = "command" | "link" | "action";
// export type Command<T extends string = string> = {
//   label: string;
//   description: string;
//   app: App;
//   icon: JSX.Element;
//   type: CommandType;
//   shortcut?: string[];
//   view?: T;
// };

// export type Views<T extends string> = {
//   [id in T]: View;
// };

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
    loader: (props: LoaderArgs) => Promise<T>;
    view: (props: T | undefined) => JSX.Element;
  };
};

export interface Action<PropsType = {}> {
  type: string;
  handler: (props: ActionArgs & { props: PropsType }) => Promise<unknown>;
}

export type ModuleConfig<T, ActionType extends Action[]> = {
  name: string;
  title: string;
  description: string;
  author: string;
  categories: string[];
  license: string;
  serverActions: ActionType;
  commands: Command<T>[];
};

export type GlobalConfig = {
  modules: ModuleConfig<any, []>[];
};

// export type View = {
//   component: React.FC;
//   commands: Command[];
// };

export type InternalContextType = {
  globalConfig: GlobalConfig;
  query: string;
  enterRawQuery: (value: string) => void;
  command?: Command;
  pageData?: unknown;
  handleClickCommand: (command: Command) => void;
  commands: Command[];
};
