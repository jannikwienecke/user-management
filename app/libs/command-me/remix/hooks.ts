import { useSearchParams } from "@remix-run/react";

export const useRemixAdapter = () => {
  const [_, setSearchParams] = useSearchParams();

  const queryChangeAdapter = () => {};
  const searchParamsAdapter = ({
    searchParams,
  }: {
    searchParams: URLSearchParams;
  }) => {
    setSearchParams(searchParams);
  };

  return {
    queryChangeAdapter,
    searchParamsAdapter,
  };
};
