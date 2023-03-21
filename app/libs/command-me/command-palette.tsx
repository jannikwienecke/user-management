import { useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import { useGlobalConfig } from "./core/use-global-config";
import { useRemixAdapter } from "./remix/hooks";
import { InternalStateProvider } from "./state-management/internal-state-provider";
import type { Command } from "./types";
import { CommandBarOverlay } from "./ui-blocks/command-bar-overlay";
import { Layout } from "./ui-blocks/layout";

export function CommandPallete() {
  const [open, setOpen] = useState(true);
  const [rawQuery, setRawQuery] = useState("");
  const [command, setCommand] = React.useState<Command>();
  const globalConfig = useGlobalConfig();
  const { searchParamsAdapter } = useRemixAdapter();

  const { data } = useLoaderData();

  const query = rawQuery.toLowerCase().replace(/^[#>]/, "");

  const enterRawQuery = (value: string) => {
    setRawQuery(value);
  };

  React.useEffect(() => {
    const commands = globalConfig.modules.map((m) => m.commands).flat();
    const url = new URL(location.href);
    const viewId = url.searchParams.get("view");
    const command = commands.find((c) => c.mode.id === viewId);
    setCommand(command);
  }, [globalConfig.modules]);

  const handleClickCommand = (command: Command) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("view", command.mode.id);
    const url = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({}, "", url);
    setCommand(command);

    searchParamsAdapter({ searchParams });
  };

  const allCommands = globalConfig.modules.map((m) => m.commands).flat();

  const filteredCommands = allCommands.filter((command) => {
    return command.title.toLowerCase().includes(query);
  });

  return (
    <CommandBarOverlay isOpen={open} onClose={() => setRawQuery("")}>
      <InternalStateProvider
        context={{
          globalConfig: globalConfig,
          query,
          enterRawQuery,
          command,
          pageData: data,
          handleClickCommand,
          commands: filteredCommands,
        }}
      >
        <Layout />
      </InternalStateProvider>
    </CommandBarOverlay>
  );
}
