import { TagIcon } from "@heroicons/react/24/outline";
import { type ActionArgs } from "@remix-run/server-runtime";
import { createConfig, createRemixAction } from "~/libs/command-me";
import { NotesList, type NotesListProps } from "./list";

export const createNote = createRemixAction({
  type: "createNote" as const,
  handler: (props: { test: string } & ActionArgs) => {
    return Promise.resolve({
      hello: props.test,
    });
  },
});

const newConfig = createConfig({
  name: "Notes",
  title: "Notes",
  description: "Note Taking Module for Command-Me",
  actions: [createNote],
  author: "jannikwienecke",
  categories: ["Applications"],
  license: "MIT",
  commands: [
    {
      name: "Show Notes",
      title: "Show Notes",
      icon: TagIcon,
      description: "Show selection of notes in a list view",
      hideSearch: false,
      // enter symbol as shortcut ↩
      shortcut: ["↩"],
      mode: {
        type: "view",
        loader: () => {
          return new Promise<NotesListProps>((resolve) => {
            setTimeout(() => {
              resolve({
                notes: [
                  { title: "This is my very first note" },
                  {
                    title: "This is my second note",
                  },
                ],
              });
            }, 300);
          });
        },
        view: NotesList,
        id: "notes-list-view",
        // onEnter:
        // childs:
      },
    },
    {
      name: "create note",
      title: "Create Note",
      icon: TagIcon,
      description: "Create a new note",
      hideSearch: false,
      // enter symbol as shortcut ↩
      shortcut: ["⌘", "↩"],
      mode: {
        type: "no-view",
        // action: createNote,

        id: "create-note-action",
        // onEnter:
        // childs:
      },
    },
  ],
});

// a view migh be a class
// and we can have actions that are navigations
// in this case we can have something lke MyView.addChild(DetailView)

export default newConfig;
