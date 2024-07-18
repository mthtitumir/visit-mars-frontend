"use client";
import { store } from "@/redux/store";
import { TChildrenProps } from "@/types";
import { Provider } from "react-redux";

const Providers = ({ children }: TChildrenProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
