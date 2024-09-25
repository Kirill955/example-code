import React from "react";
import { styled } from "@stitches/react";

const TypographyContainer = styled("div", {
  fontSize: "16px",
});

export const Typography: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <TypographyContainer>{children}</TypographyContainer>;
};
