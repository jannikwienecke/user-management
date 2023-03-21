export const ContentContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="min-h-[30vh] px-2 py-3">{children}</div>;
};
