import { Box, Image, Text, Stack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface UserCardProps {
  login: string;
  avatar_url: string;
  id: number;
  addToFavorite: () => void;
  removeFromFavorite: () => void;
  isFavorite: boolean;
}

export const UserCard = ({ login, avatar_url, addToFavorite, isFavorite, removeFromFavorite }: UserCardProps) => {
  const router = useRouter();
  const redirectToProfile = () => router.push(login);

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} maxW="sm" bg="white" boxShadow="md" w={200}>
      <Stack direction="column" align="center">
        <Image src={avatar_url} alt={`${login} avatar`} borderRadius="full" boxSize="100px" />
        <Text fontWeight="bold" fontSize="xl" mt={4}>
          {login}
        </Text>
        <Button colorScheme="blue" size={"sm"} w={"100%"} onClick={redirectToProfile}>
          Ver Perfil
        </Button>
        <Button colorScheme="blue" size={"sm"} variant={"outline"} w={"100%"} onClick={isFavorite ? removeFromFavorite : addToFavorite}>
          {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        </Button>
      </Stack>
    </Box>
  );
};
