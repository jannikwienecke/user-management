import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { IconButton } from "./icon-button";

export const BackButton = () => {
  return (
    <IconButton>
      <ArrowLeftIcon className="h-4 w-4 text-gray-900" />
    </IconButton>
  );
};
