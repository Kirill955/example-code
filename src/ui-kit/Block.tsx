import React from "react";
import { styled } from "@stitches/react";

const BlockContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Block: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <BlockContainer>{children}</BlockContainer>;
};
