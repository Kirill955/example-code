import React from "react";
import { styled } from "@stitches/react";

const RowContainer = styled("div", {
  padding: "16px",
});

export const Row: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <RowContainer>{children}</RowContainer>;
};
