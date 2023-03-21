import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { TransitionContainer } from "../components";

export const CommandBarOverlay = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={onClose} appear>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 blur-[8px] transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4  sm:p-6 md:p-10 lg:px-20">
          <TransitionContainer>
            <Dialog.Panel className="transfor mx-auto flex w-full flex-col overflow-hidden rounded-xl bg-gray-100 bg-opacity-80 p-1 shadow-2xl  ring-opacity-5 blur-0  backdrop-blur-sm transition-all lg:max-w-5xl">
              {children}
            </Dialog.Panel>
          </TransitionContainer>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
