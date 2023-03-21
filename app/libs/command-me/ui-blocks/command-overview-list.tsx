import { ResultList } from "../command-list";
import type { Command } from "../types";

export const CommandOverviewList = ({ commands }: { commands: Command[] }) => {
  return (
    <>
      <h2 className="mx-4 text-xs font-semibold text-gray-500">Commands</h2>

      <ResultList commands={commands} />
    </>
  );
};
