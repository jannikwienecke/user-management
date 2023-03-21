import type { LoaderArgs } from "@remix-run/server-runtime";
import type { ModuleConfig } from "../types";

export const loaderFunction = async (
  props: LoaderArgs & {
    modules: ModuleConfig<any, any>[];
  }
) => {
  const { request, modules } = props;

  const url = new URL(request.url);
  const viewId = url.searchParams.get("view");

  if (!viewId) {
    return {
      data: undefined,
    };
  }

  const module = modules.find((m) => m.commands.find((c) => c.mode.id));
  const command = module?.commands.find((c) => c.mode.id === viewId);

  const response = await command?.mode.loader(props);

  return {
    data: response,
  };
};

export const getLoader =
  (configArgs: { modules: ModuleConfig<any, any>[] }) =>
  (loaderArgs: LoaderArgs) =>
    loaderFunction({
      ...loaderArgs,
      ...configArgs,
    });
