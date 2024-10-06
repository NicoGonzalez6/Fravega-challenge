import { Box, Image, Text, Link, Stack } from "@chakra-ui/react";

interface UserProps {
  login: string;
  avatar_url: string;
  html_url: string;
  id: number;
}

export const ProfileCard = ({ login, avatar_url, html_url }: UserProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} maxW="sm" bg="white" boxShadow="md" w={200}>
      <Stack direction="column" align="center">
        <Image src={avatar_url} alt={`${login} avatar`} borderRadius="full" boxSize="100px" />
        <Text fontWeight="bold" fontSize="xl" mt={4}>
          {login}
        </Text>
        <Link href={html_url} isExternal color="teal.500">
          View Profile
        </Link>
      </Stack>
    </Box>
  );
};
