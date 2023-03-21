import { Header } from "./header";
import { SearchInput } from "./search-input";
import { useInternalContext } from "../state-management/use-internal-state";
import { CommandOverviewList } from "./command-overview-list";
import { ContentContainer } from "./content-container";

export const Layout = () => {
  const { enterRawQuery, command, pageData, handleClickCommand, commands } =
    useInternalContext();

  const ComponentToRender = command?.mode.view ? (
    <command.mode.view key={command.mode.id} {...(pageData || {})} />
  ) : (
    <CommandOverviewList commands={commands} />
  );

  const canGoBack = Boolean(command?.mode.id);
  const { hideSearch } = command || {};
  return (
    <>
      {hideSearch ? (
        <>
          <Header.Container>
            <Header.BackButton />
          </Header.Container>
          <ContentContainer>{ComponentToRender}</ContentContainer>
        </>
      ) : (
        <SearchInput
          canGoBack={canGoBack}
          onChange={enterRawQuery}
          onSelect={handleClickCommand}
        >
          <ContentContainer>{ComponentToRender}</ContentContainer>
        </SearchInput>
      )}
    </>
  );
};
