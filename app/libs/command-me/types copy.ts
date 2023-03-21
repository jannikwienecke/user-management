export type App = "User" | "System";
export type CommandType = "command" | "link" | "action";
export type Command<T extends string = string> = {
  label: string;
  description: string;
  app: App;
  icon: JSX.Element;
  type: CommandType;
  shortcut?: string[];
  view?: T;
};

export type View = {
  component: React.FC;
  commands: Command[];
};

export type Views<T extends string> = {
  [id in T]: View;
};

export type GlobalConfig<T extends string = string> = {
  commands: Command<T>[];
  views: Views<T>;
};
