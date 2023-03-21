import * as icons from "@heroicons/react/20/solid";
import { type Action, createConfig } from "~/libs/command-me";
import { NotesList, NotesListProps } from "./list";
import { TagIcon } from "@heroicons/react/24/outline";

const CustomIcon = ({ iconName }: { iconName: keyof typeof icons }) => {
  const Icon = icons[iconName];
  return <Icon className="h-4 w-4" />;
};

type ViewType = "users" | "test";

const createAction = <T,>(action: T) => {
  return action;
};

export const createNoteAction = createAction({
  type: "createNote",
  handler: (props: { type: string }) => {
    console.log("Create Note", props.type);
    return Promise.resolve({});
  },
});

const removeNoteAction = createAction({
  type: "removeNote",
  props: {
    id: 123,
  },
  handler: (props: any) => {
    return Promise.resolve({});
  },
});

export type ActionT = typeof createNoteAction | typeof removeNoteAction;
export const actions = [createNoteAction, removeNoteAction];

const newConfig = createConfig({
  name: "Notes",
  title: "Notes",
  description: "Note Taking Module for Command-Me",

  author: "jannikwienecke",
  categories: ["Applications"],
  license: "MIT",
  serverActions: [],
  // serverActions: [createNoteAction, removeNoteAction],
  commands: [
    {
      name: "index",
      title: "Show Notes",
      icon: TagIcon,
      description: "Show selection of notes in a list view",
      hideSearch: false,
      mode: {
        type: "view",
        loader: () => {
          return new Promise<NotesListProps>((resolve) => {
            setTimeout(() => {
              resolve({
                notes: [{ title: "Test" }],
              });
            }, 300);
          });
        },
        view: NotesList,
        id: "notes-list-view",
      },
    },
  ],
});

export default newConfig;
