import List from "~/libs/command-me/list";
import { useAction } from "~/libs/command-me/remix/hooks";
import { type createNote } from ".";
import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

export interface NotesListProps {
  notes?: { title: string }[];
}

export const NotesList = (props: NotesListProps | undefined) => {
  const { dispatchAction, state, data } = useAction<typeof createNote>();

  React.useEffect(() => {
    console.log("state: ", state);
  }, [state]);

  React.useEffect(() => {
    console.log("HELLO: ", data?.hello);
  }, [data]);

  return (
    <List>
      {props?.notes?.map((item) => {
        return (
          <List.Item
            title={item.title}
            description="Show selection of notes in a list view"
            prefixIcon={<EyeIcon className="h-6 w-6" />}
            // onClick={() => {
            //   dispatchAction({
            //     type: "createNote",
            //     payload: {
            //       test: item.title,
            //     },
            //   });
            // }}
            key={item.title}
          />
        );
      })}
    </List>
  );
};
