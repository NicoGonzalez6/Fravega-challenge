import { Stack, Text } from "@chakra-ui/react";
import React, { memo } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = memo(({ children, title }) => {
  return (
    <Stack bg={"white"} p={4} gap={4} boxShadow={"sm"} borderRadius={"md"}>
      <Text fontWeight={"bold"}>{title}</Text>
      {children}
    </Stack>
  );
});
