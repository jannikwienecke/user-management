import List from "~/libs/command-me/list";
import type newConfig from ".";
import { type Action } from "~/libs/command-me";
import { ActionT, actions, createNoteAction } from ".";

export interface NotesListProps {
  notes?: { title: string }[];
}

const useAction = <T extends ActionT>() => {
  const dispatchAction = ({ type }: { type: T["type"] }) => {
    return {};
  };

  return {
    dispatchAction,
  };
};

type x = Parameters<(typeof createNoteAction)["handler"]>;

export const NotesList = (props: NotesListProps | undefined) => {
  // const { dispatchAction } = useAction<ActionT>();

  return (
    <List>
      {props?.notes?.map((item) => {
        return (
          <List.Item
            // onClick={() => {
            //   dispatchAction({
            //     type: "creteNote",
            //     payload: {
            //       title: "new note",
            //     },
            //   });
            // }}
            key={item.title}
          >
            {item.title}
          </List.Item>
        );
      })}
    </List>
  );
};
