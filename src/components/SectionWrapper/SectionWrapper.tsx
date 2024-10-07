import { Stack, Text } from "@chakra-ui/react";
import React, { memo } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
  testId?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = memo(({ children, title, testId }) => {
  return (
    <Stack bg={"white"} p={4} gap={4} boxShadow={"sm"} borderRadius={"md"} data-test-id={testId}>
      <Text fontWeight={"bold"}>{title}</Text>
      {children}
    </Stack>
  );
});
