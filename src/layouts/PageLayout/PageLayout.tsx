import { Stack } from "@chakra-ui/react";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <Stack gap={4}>{children}</Stack>;
};
