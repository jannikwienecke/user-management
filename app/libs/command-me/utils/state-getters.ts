import { type GlobalState } from "../command-palette";

export const filteredCommands = (state: GlobalState) => {
  const query = state.query.toLowerCase().replace(/^[#>]/, "");
  return (state.config?.modules.map((m) => m.commands).flat() || []).filter(
    (command) => {
      return command.title.toLowerCase().includes(query);
    }
  );
};
