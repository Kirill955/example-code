import React from "react";
import { styled } from "@stitches/react";

const ContentContainer = styled("div", {
  width: "100%",
  padding: "32px",
});

export const Content: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};
