import { BackButton } from "../components";

export const HeaderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-row border-b-[1px] border-gray-300 p-2">
      {children}
    </div>
  );
};

export const Header = {
  Container: HeaderContainer,
  BackButton,
};
