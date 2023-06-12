import { Combobox } from "@headlessui/react";
import { classNames } from "./utils";
// import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";

// type ListState = {
//   commands: Command[];
//   setCommands: (commands: Command[]) => void;
// };

// const useList = create<ListState>()(
//   devtools(
//     persist(
//       (set) => ({
//         // CONFIG
//         commands: [],
//         setCommands: (commands) =>
//           set((state) => ({ commands: commands }), false, {
//             type: "set-commands",
//             commands: commands,
//           }),
//       }),
//       {
//         name: "command-me-list",
//       }
//     )
//   )
// );

export const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className="mt-2 text-sm text-gray-700">{children}</ul>;
};

List.Item = ({
  title,
  description,
  shortcut,
  prefixIcon,
  suffix,
  actions,
  id,
}: {
  title: string;
  description: string;
  shortcut?: string[];
  prefixIcon?: React.ReactNode;
  suffix?: React.ReactNode;
  actions?: React.ReactNode;
  id?: string;
}) => {
  return (
    <Combobox.Option
      key={title}
      value={id}
      className={({ active }) =>
        classNames(
          "flex cursor-default select-none items-center px-4 py-2",
          active && "rounded-md bg-gray-300 bg-opacity-40 text-white"
        )
      }
    >
      {prefixIcon}

      <div className="w-full">
        <div className="flex h-full flex-1 flex-row items-center justify-between">
          <div className="flex flex-row justify-start ">
            <span className="ml-3 flex-auto truncate text-xs text-black">
              {title}
            </span>

            <span className="ml-3 hidden flex-auto truncate text-xs text-gray-500 sm:block">
              {description}
            </span>

            <div className="ml-3 flex flex-auto flex-row truncate text-xs text-gray-500">
              {shortcut?.map((shortcut, index) => (
                <kbd
                  key={index}
                  className="flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold"
                >
                  {shortcut}
                </kbd>
              ))}
            </div>
          </div>
        </div>
      </div>

      <span className="text-xs text-gray-500">{suffix}</span>
    </Combobox.Option>
  );
};

const ActionPanel = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

ActionPanel.Push = ({
  title,
  target,
}: {
  title: string;
  target: React.ReactNode;
}) => {
  return (
    <button onClick={() => console.log("Push action triggered", title, target)}>
      {title}
    </button>
  );
};

List.Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <ul className="py-2">
      <h3 className="mb-2 font-semibold text-gray-600">{title}</h3>
      {children}
    </ul>
  );
};

export default List;

// we can create sub views by adding ;subview= to the end of the url
