import { useFetcher, useSearchParams } from "@remix-run/react";
import { ActionArgs } from "@remix-run/server-runtime";
import { ArgumentsOfAction, ReturnTypeOfAction } from "../types";

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

export const useAction = <
  T extends {
    type: string;
    handler: any;
  }
>() => {
  const { submit, ...props } = useFetcher();

  const dispatchAction = ({
    type,
    payload,
  }: {
    type: T["type"];
    payload: ArgumentsOfAction<T>;
  }) => {
    return {
      submit: submit(
        {
          action: type,
          payload: JSON.stringify(payload),
        },
        {
          method: "post",
        }
      ),
    };
  };

  const data = props.data as
    | {
        data: Awaited<ReturnTypeOfAction<T>>;
      }
    | undefined;

  return {
    dispatchAction,
    ...props,
    data: data?.data,
  };
};
