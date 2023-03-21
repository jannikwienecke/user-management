import { Combobox } from "@headlessui/react";
import type { Command } from "./types";
import { classNames } from "./utils";

// TODO CONTINUE HERE
// Write Generic List Component
// and use this for this component
export const ResultList = ({ commands }: { commands: Command[] }) => {
  return (
    <ul className="mt-2 text-sm text-gray-700">
      {commands.map((command) => (
        <Combobox.Option
          key={command.title}
          value={command}
          className={({ active }) =>
            classNames(
              "flex cursor-default select-none items-center px-4 py-2",
              active && "rounded-md bg-gray-300 bg-opacity-40 text-white"
            )
          }
        >
          <div className="grid h-6 w-6 place-items-center rounded-md bg-red-200 p-1">
            {command.icon ? <command.icon /> : <span>🔍</span>}
          </div>

          <div className="w-full">
            <div className="flex h-full flex-1 flex-row items-center justify-between">
              <div className="flex flex-row justify-start ">
                <span
                  className={classNames(
                    "ml-3 flex-auto truncate text-xs text-black"
                  )}
                >
                  {command.title}
                </span>

                <span
                  className={classNames(
                    "ml-3 hidden flex-auto truncate text-xs text-gray-500 sm:block"
                  )}
                >
                  {command.description}
                </span>

                <div
                  className={classNames(
                    "ml-3 flex flex-auto flex-row truncate text-xs text-gray-500"
                  )}
                >
                  {command.shortcut?.map((shortcut, index) => (
                    <kbd
                      key={index}
                      className="flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold"
                    >
                      {shortcut}
                    </kbd>
                  ))}
                </div>
              </div>
              <div>
                <span
                  className={classNames(
                    "ml-3 flex-auto truncate text-xs text-gray-500"
                  )}
                >
                  {command.title}
                </span>
              </div>
            </div>
            <div className="ml-3 block text-xs sm:hidden">
              {command.description}
            </div>
          </div>
        </Combobox.Option>
      ))}
    </ul>
  );
};
