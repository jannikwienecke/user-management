import ResultListFuture from "../command-list";
import List from "../list";
import type { Command } from "../types";

export const CommandOverviewList = ({ commands }: { commands: Command[] }) => {
  return (
    <List>
      <List.Section title="Commands">
        {commands.map((command) => (
          <List.Item
            id={command.name}
            key={command.title}
            {...command}
            prefixIcon={
              <div className="grid h-6 w-6 place-items-center rounded-md bg-red-200 p-1">
                {command.icon ? <command.icon /> : <span>🔍</span>}
              </div>
            }
            suffix={<span>Command</span>}
            // actions={
            //   <ActionPanel>
            //     <ActionPanel.Push
            //       title="Show Details"
            //       target={<div>Detail markdown="# Hey! 👋"</div>}
            //     />
            //   </ActionPanel>
            // }
          />
        ))}
      </List.Section>
    </List>
  );
};
