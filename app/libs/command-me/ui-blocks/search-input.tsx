import { Combobox } from "@headlessui/react";
import { BackButton } from "../components";
import { type Command } from "../types";
import { useEventHandler, useGlobalStore } from "../command-palette";

export const SearchInput = ({ children }: { children: React.ReactNode }) => {
  const { handleClickCommand, enterRawQuery } = useEventHandler();
  const activeCommand = useGlobalStore((state) => state.activeCommand);
  const canGoBack = Boolean(activeCommand?.mode.id);

  return (
    <Combobox onChange={handleClickCommand}>
      <div className="flex flex-row items-center border-0 border-b-[.8px] border-gray-400">
        {canGoBack ? (
          <div className="px-4">
            <BackButton />
          </div>
        ) : null}

        <Combobox.Input
          placeholder="Search for apps and commands"
          onChange={(e) => enterRawQuery(e.target.value)}
          className="h-12 w-full   border-0 bg-transparent pb-1 pr-4 text-gray-900 placeholder:text-base placeholder:text-gray-500 focus:ring-0 sm:text-sm"
        />
      </div>

      {children}
    </Combobox>
  );
};
