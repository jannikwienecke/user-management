import { useLoaderData } from "@remix-run/react";
import React from "react";
import { useRemixAdapter } from "./remix/hooks";
import type { Command, GlobalConfig } from "./types";
import { CommandBarOverlay } from "./ui-blocks/command-bar-overlay";
import { Layout } from "./ui-blocks/layout";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface GlobalState {
  // CONFIG
  config: GlobalConfig | undefined;
  init: (by: GlobalConfig) => void;

  // STATE OPEN/CLOSE
  isOpen: boolean;
  open: () => void;
  close: () => void;

  // QUERY
  query: string;
  updateQuery: (query: string) => void;

  // ACTIVE COMMAND
  activeCommand: Command | undefined;
  activateCommand: (command: Command) => void;
  resetCommand: () => void;

  // loader data
  loaderData: unknown | undefined;
  setLoaderData: (data: unknown) => void;
}

export const useGlobalStore = create<GlobalState>()(
  devtools(
    persist(
      (set) => ({
        // CONFIG
        config: undefined,
        init: (config) =>
          set((state) => ({ config: config }), false, {
            type: "init-config",
            config: config,
          }),

        // STATE
        isOpen: true,
        open: () =>
          set((state) => ({ isOpen: true }), false, {
            type: "open",
          }),
        close: () =>
          set((state) => ({ isOpen: false }), false, {
            type: "close",
          }),

        // QUERY
        query: "",
        updateQuery: (query) =>
          set((state) => ({ query: query }), false, {
            type: "update-query",
            query: query,
          }),

        // ACTIVE COMMAND
        activeCommand: undefined,
        activateCommand: (command) =>
          set((state) => ({ activeCommand: command }), false, {
            type: "activate-command",
            command: command,
          }),
        resetCommand: () =>
          set((state) => ({ activeCommand: undefined }), false, {
            type: "reset-command",
          }),

        // loader data
        loaderData: undefined,
        setLoaderData: (data) =>
          set((state) => ({ loaderData: data }), false, {
            type: "set-loader-data",
            data: data,
          }),
      }),
      {
        name: "global-store",
      }
    )
  )
);

export const useEventHandler = () => {
  const { searchParamsAdapter } = useRemixAdapter();
  const updateQuery = useGlobalStore((state) => state.updateQuery);
  const activateCommand = useGlobalStore((state) => state.activateCommand);
  const close = useGlobalStore((state) => state.close);
  const open = useGlobalStore((state) => state.open);
  const commands = useGlobalStore(
    (state) => state.config?.modules.map((m) => m.commands).flat() ?? []
  );

  const enterRawQuery = React.useCallback(
    (value: string) => {
      updateQuery(value);
    },
    [updateQuery]
  );

  const handleCloseCommandPalette = React.useCallback(() => {
    updateQuery("");
    close();
  }, [close, updateQuery]);

  const handleClickCommand = React.useCallback(
    (commandName: string) => {
      const command = commands.find((item) => item.name === commandName);

      if (!command) return;

      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("view", command.mode.id);
      const url = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({}, "", url);
      activateCommand(command);

      searchParamsAdapter({ searchParams });
    },
    [activateCommand, commands, searchParamsAdapter]
  );

  const handleOpenCommandPalette = React.useCallback(() => {
    open();
  }, [open]);

  return {
    enterRawQuery,
    handleCloseCommandPalette,
    handleClickCommand,
    handleOpenCommandPalette,
  };
};

const useSideEffects = ({ globalConfig }: { globalConfig: GlobalConfig }) => {
  const { data } = useLoaderData();

  const init = useGlobalStore((state) => state.init);
  const setLoaderData = useGlobalStore((state) => state.setLoaderData);
  const activateCommand = useGlobalStore((state) => state.activateCommand);

  React.useEffect(() => {
    init(globalConfig);
  }, [globalConfig, init]);

  React.useEffect(() => {
    setLoaderData(data);
  }, [data, setLoaderData]);

  React.useEffect(() => {
    const view = new URLSearchParams(window.location.search).get("view");

    if (!view) return;

    const command = globalConfig.modules
      .map((m) => m.commands)
      .flat()
      .find((c) => c.mode.id === view);

    if (!command) return;

    activateCommand(command);
  }, [activateCommand, globalConfig.modules]);
};

const useKeyboardEvents = () => {
  const { handleCloseCommandPalette, handleOpenCommandPalette } =
    useEventHandler();

  // on click escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        console.log("handleCloseCommandPalette...");

        handleCloseCommandPalette();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleCloseCommandPalette]);

  // open on command + k
  React.useEffect(() => {
    const handleCommandK = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        console.log("handleOpenCommandPalette...");

        handleOpenCommandPalette();
      }
    };

    document.addEventListener("keydown", handleCommandK);
    return () => document.removeEventListener("keydown", handleCommandK);
  }, [handleOpenCommandPalette]);
};

export function CommandPallete({
  globalConfig,
}: {
  globalConfig: GlobalConfig;
}) {
  useSideEffects({
    globalConfig,
  });

  useKeyboardEvents();

  const isOpen = useGlobalStore((state) => state.isOpen);
  const { handleCloseCommandPalette } = useEventHandler();

  return (
    <CommandBarOverlay isOpen={isOpen} onClose={handleCloseCommandPalette}>
      <Layout />
    </CommandBarOverlay>
  );
}
