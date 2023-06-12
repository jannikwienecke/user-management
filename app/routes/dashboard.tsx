import { Homescreen } from "~/components/homescreen";
import { CommandPallete } from "~/libs/command-me/command-palette";
import { getLoader } from "~/libs/command-me/remix";
import { getAction } from "~/libs/command-me/remix/action";
import notesModule from "~/modules/notes";

const modules = [notesModule];

export const loader = getLoader({ modules });

export const action = getAction({ modules });

export default function Index() {
  return (
    <>
      <Homescreen />
      <CommandPallete
        globalConfig={{
          modules,
        }}
      />
    </>
  );
}
