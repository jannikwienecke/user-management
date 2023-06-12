import type { ActionArgs } from "@remix-run/server-runtime";
import type { ModuleConfig } from "../types";

export const actionFunction = async (
  props: ActionArgs & {
    modules: ModuleConfig<any>[];
  }
) => {
  const { request, modules } = props;

  if (!request.body) {
    return {
      data: undefined,
    };
  }

  const formData = await request.formData();

  const action = formData.get("action");
  const payload = formData.get("payload");

  if (!action) {
    throw new Error("No action provided");
  }

  if (typeof payload !== "string") {
    throw new Error("No payload provided");
  }

  const moduleWithAction = modules.find((m) => m.actions.find((c) => c.type));

  const actionWithHandler = moduleWithAction?.actions.find(
    (c) => c.type === action
  );

  const payloadParsed = JSON.parse(payload);

  const data = await actionWithHandler?.handler({
    ...props,
    ...payloadParsed,
  });

  return {
    data,
  };
};

export const getAction =
  (configArgs: { modules: ModuleConfig<any>[] }) => (actionArgs: ActionArgs) =>
    actionFunction({
      ...actionArgs,
      ...configArgs,
    });
