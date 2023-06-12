// import { Combobox } from "@headlessui/react";
// import type { Command } from "./types";
// import { classNames } from "./utils";
// import List from "./list";
// import { ArchiveBoxIcon } from "@heroicons/react/24/outline";

// // TODO CONTINUE HERE
// // Write Generic List Component
// // and use this for this component
// export const ResultList = ({ commands }: { commands: Command[] }) => {
//   return (
//     <ul className="mt-2 text-sm text-gray-700">
//       {commands.map((command) => (
//         <Combobox.Option
//           key={command.title}
//           value={command}
//           className={({ active }) =>
//             classNames(
//               "flex cursor-default select-none items-center px-4 py-2",
//               active && "rounded-md bg-gray-300 bg-opacity-40 text-white"
//             )
//           }
//         >
//           <div className="grid h-6 w-6 place-items-center rounded-md bg-red-200 p-1">
//             {command.icon ? <command.icon /> : <span>🔍</span>}
//           </div>

//           <div className="w-full">
//             <div className="flex h-full flex-1 flex-row items-center justify-between">
//               <div className="flex flex-row justify-start ">
//                 <span
//                   className={classNames(
//                     "ml-3 flex-auto truncate text-xs text-black"
//                   )}
//                 >
//                   {command.title}
//                 </span>

//                 <span
//                   className={classNames(
//                     "ml-3 hidden flex-auto truncate text-xs text-gray-500 sm:block"
//                   )}
//                 >
//                   {command.description}
//                 </span>

//                 <div
//                   className={classNames(
//                     "ml-3 flex flex-auto flex-row truncate text-xs text-gray-500"
//                   )}
//                 >
//                   {command.shortcut?.map((shortcut, index) => (
//                     <kbd
//                       key={index}
//                       className="flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold"
//                     >
//                       {shortcut}
//                     </kbd>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <span
//                   className={classNames(
//                     "ml-3 flex-auto truncate text-xs text-gray-500"
//                   )}
//                 >
//                   {command.title}
//                 </span>
//               </div>
//             </div>
//             <div className="ml-3 block text-xs sm:hidden">
//               {command.description}
//             </div>
//           </div>
//         </Combobox.Option>
//       ))}
//     </ul>
//   );
// };

// const ResultListFuture = () => {
//   return (
//     <List
//       actions={
//         <ActionPanel>
//           <Action.Push
//             title="Show Details"
//             target={<Detail markdown="# Hey! 👋" />}
//           />
//         </ActionPanel>
//       }
//     >
//       <List.Item
//         prefixIcon={<ArchiveBoxIcon />}
//         suffixIcon={<ArchiveBoxIcon />}
//         title="Greeting"
//         actions={
//           <ActionPanel>
//             <Action.Push
//               title="Show Details"
//               target={<Detail markdown="# Hey! 👋" />}
//             />
//           </ActionPanel>
//         }
//       />
//     </List>
//   );
// };

import { Combobox } from "@headlessui/react";
import type { Command } from "./types";
import { classNames } from "./utils";

const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className="mt-2 text-sm text-gray-700">{children}</ul>;
};

List.Item = ({
  command,
  prefixIcon,
  suffixIcon,
  actions,
}: {
  command: Command;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  actions?: React.ReactNode;
}) => {
  return (
    <Combobox.Option
      key={command.title}
      value={command}
      className={({ active }) =>
        classNames(
          "flex cursor-default select-none items-center px-4 py-2",
          active && "rounded-md bg-gray-300 bg-opacity-40 text-white"
        )
      }
    >
      {prefixIcon}

      <div className="w-full">
        <div className="flex h-full flex-1 flex-row items-center justify-between">
          <div className="flex flex-row justify-start ">
            <span className="ml-3 flex-auto truncate text-xs text-black">
              {command.title}
            </span>

            <span className="ml-3 hidden flex-auto truncate text-xs text-gray-500 sm:block">
              {command.description}
            </span>

            <div className="ml-3 flex flex-auto flex-row truncate text-xs text-gray-500">
              {command.shortcut?.map((shortcut, index) => (
                <kbd
                  key={index}
                  className="flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold"
                >
                  {shortcut}
                </kbd>
              ))}
            </div>
          </div>
        </div>
      </div>

      {suffixIcon}
    </Combobox.Option>
  );
};

const ActionPanel = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

ActionPanel.Push = ({
  title,
  target,
}: {
  title: string;
  target: React.ReactNode;
}) => {
  return (
    <button onClick={() => console.log("Push action triggered", title, target)}>
      {title}
    </button>
  );
};

List.Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="py-2">
      <h3 className="mb-2 font-semibold text-gray-600">{title}</h3>
      {children}
    </li>
  );
};

const ResultListFuture = ({ commands }: { commands: Command[] }) => {};

export default ResultListFuture;

// const Item = ({
//   command,
//   title,
//   description,
//   shortcut,
//   prefixIcon,
//   suffixIcon,
// }: {
//   command: Command;
//   title: string;
//   description: string;
//   shortcut: string[];
//   prefixIcon?: React.ReactNode;
//   suffixIcon?: React.ReactNode;
// }) => {
//   return (
//     <Combobox.Option
//       key={command.title}
//       value={command}
//       className={({ active }) =>
//         classNames(
//           "flex cursor-default select-none items-center px-4 py-2",
//           active && "rounded-md bg-gray-300 bg-opacity-40 text-white"
//         )
//       }
//     >
//       <div className="grid h-6 w-6 place-items-center rounded-md bg-red-200 p-1">
//         {command.icon ? <command.icon /> : <span>🔍</span>}
//       </div>

//       <div className="w-full">
//         <div className="flex h-full flex-1 flex-row items-center justify-between">
//           <div className="flex flex-row justify-start ">
//             <span
//               className={classNames(
//                 "ml-3 flex-auto truncate text-xs text-black"
//               )}
//             >
//               {command.title}
//             </span>

//             <span
//               className={classNames(
//                 "ml-3 hidden flex-auto truncate text-xs text-gray-500 sm:block"
//               )}
//             >
//               {command.description}
//             </span>

//             <div
//               className={classNames(
//                 "ml-3 flex flex-auto flex-row truncate text-xs text-gray-500"
//               )}
//             >
//               {command.shortcut?.map((shortcut, index) => (
//                 <kbd
//                   key={index}
//                   className="flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold"
//                 >
//                   {shortcut}
//                 </kbd>
//               ))}
//             </div>
//           </div>
//           <div>
//             <span
//               className={classNames(
//                 "ml-3 flex-auto truncate text-xs text-gray-500"
//               )}
//             >
//               {command.title}
//             </span>
//           </div>
//         </div>
//         <div className="ml-3 block text-xs sm:hidden">
//           {command.description}
//         </div>
//       </div>
//     </Combobox.Option>
//   );
// };
