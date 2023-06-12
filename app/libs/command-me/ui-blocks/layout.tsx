import { Header } from "./header";
import { SearchInput } from "./search-input";
import { CommandOverviewList } from "./command-overview-list";
import { ContentContainer } from "./content-container";
import { useGlobalStore } from "../command-palette";
import { filteredCommands } from "../utils/state-getters";
import { Footer } from "./footer";

export const Layout = () => {
  const activeCommand = useGlobalStore((state) => state.activeCommand);
  const loaderData = useGlobalStore((state) => state.loaderData);
  const commands = useGlobalStore(filteredCommands);

  const ComponentToRender = activeCommand?.mode.view ? (
    <activeCommand.mode.view
      key={activeCommand.mode.id}
      {...(loaderData || {})}
    />
  ) : (
    <CommandOverviewList commands={commands} />
  );

  const { hideSearch } = activeCommand || {};

  return (
    <>
      {hideSearch ? (
        <>
          <Header.Container>
            <Header.BackButton />
          </Header.Container>
          <ContentContainer>{ComponentToRender}</ContentContainer>
          <Footer />
        </>
      ) : (
        <>
          <SearchInput>
            <ContentContainer>{ComponentToRender}</ContentContainer>
          </SearchInput>
          <Footer />
        </>
      )}
    </>
  );
};
