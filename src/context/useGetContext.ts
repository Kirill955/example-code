import { useContext } from "react";

import { Context } from "./context";

export const useGetContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Context must be used within a Context.Provider");
  }

  return context;
};
