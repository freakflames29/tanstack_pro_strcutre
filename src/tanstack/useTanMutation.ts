import { useMutation, type MutateFunction } from "@tanstack/react-query";
import React from "react";

interface mutaionProps {
  mutaionKey: unknown[] | undefined;
  mutaionFn: MutateFunction<unknown | void> | undefined;
}

const useTanMutation = (props: mutaionProps) => {
  const tanMutaion = useMutation({
    mutationKey: props.mutaionKey,
    mutationFn: props.mutaionFn,
    onSuccess:()=>{},
    onError:()=>{}
  });

  return tanMutaion;
};

export default useTanMutation;
