import React from "react";

export interface NotesProps {
  children: React.ReactNode;
}

export interface NoteItemProps {
  children: React.ReactNode;
}

type ListContextType = {
  stuff: any;
};

const ListContext = React.createContext<ListContextType>({} as ListContextType);

export function List({ children }: NotesProps) {
  return (
    <ListContext.Provider value={{ stuff: "hello" }}>
      <ul className="flex h-full list-none flex-col overflow-y-auto">
        {children}
      </ul>
    </ListContext.Provider>
  );
}

List.Item = function ListItem({ children }: NoteItemProps) {
  // const { stuff } = React.useContext(ListContext);

  return <li>{children}</li>;
};

export default List;
