import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export const IconButton = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="rounded-md bg-gray-300 bg-opacity-50 p-2 ">{children}</div>
  );
};
