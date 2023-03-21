import { Homescreen } from "~/components/homescreen";
import { CommandPallete } from "~/libs/command-me/command-palette";
import { CommandMeProvider } from "~/libs/command-me/core";
import { getLoader } from "~/libs/command-me/remix";
import notesModule from "~/modules/notes";

const modules = [notesModule];

export const loader = getLoader({ modules });

export default function Index() {
  return (
    <>
      <CommandMeProvider
        userGlobalConfig={{
          modules,
        }}
      >
        <Homescreen />
        <CommandPallete />
      </CommandMeProvider>
    </>
  );
}
