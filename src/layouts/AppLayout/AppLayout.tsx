import { Stack } from "@chakra-ui/react";
import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Stack as={"main"} bg={"gray.100"} minH={"100vh"} overflowX={"hidden"} p={4}>
      {children}
    </Stack>
  );
};
