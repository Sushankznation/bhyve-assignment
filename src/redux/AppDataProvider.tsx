"use client";

import { Provider } from "react-redux";
import store from "./store";
import { ChildrenProps } from "@/utils/interfaces";

const AppDataProvider = ({ children }: ChildrenProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppDataProvider;
