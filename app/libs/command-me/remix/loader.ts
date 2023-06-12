import type { LoaderArgs } from "@remix-run/server-runtime";
import type { ModuleConfig } from "../types";

// TODO: WE HAVE tO HAVE THE POSSIBILITY TO HAVE A LOADER FOR EACH COMMAND
// RETURN THE LOADER DATA FOR THE COMMAND IN THE KEY OF THE COMMAND NAME
// WE ALSO JUST NEED TO FETCH THE COMMAND DATA FROM THE MODULES AND NOT FROM THE PARENT COMMAND (OR?)

export const loaderFunction = async (
  props: LoaderArgs & {
    modules: ModuleConfig<any>[];
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

  const response = await command?.mode.loader?.(props);

  return {
    data: response,
  };
};

export const getLoader =
  (configArgs: { modules: ModuleConfig<any>[] }) => (loaderArgs: LoaderArgs) =>
    loaderFunction({
      ...loaderArgs,
      ...configArgs,
    });
