import { Dialog } from "@headlessui/react";

export const DialogPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog.Panel className="transfor mx-auto flex w-full flex-col overflow-hidden rounded-xl bg-gray-100 bg-opacity-80 p-1 shadow-2xl  ring-opacity-5 blur-0  backdrop-blur-sm transition-all lg:max-w-5xl">
      {children}
    </Dialog.Panel>
  );
};
