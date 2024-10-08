import React, { memo } from "react";
import { Box, Image, Text, Flex, Link, Badge, Icon, Stack, Button } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

export interface ProfileCardProps {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  company?: string;
  blog?: string;
  location?: string;
  public_repos: number;
  followers: number;
  following: number;
  twitter_username?: string | null;
  addToFavorite: () => void;
  removeFromFavorite: () => void;
  isFavorite: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = memo(
  ({ login, name, avatar_url, html_url, company, blog, location, public_repos, followers, following, twitter_username, addToFavorite, isFavorite, removeFromFavorite }) => {
    return (
      <Box width="100%" p={5} bg="gray.100" maxW="500px" boxShadow="md" borderRadius="lg">
        <Flex alignItems="center" mb={4} wrap="wrap" justify={["center", "flex-start"]} textAlign={["center", "left"]} gap={4}>
          <Image borderRadius="full" boxSize={["100px", "150px"]} src={avatar_url} alt={`${name}'s avatar`} />
          <Box>
            <Text fontWeight="bold" fontSize={["lg", "2xl"]}>
              {name || login}
            </Text>
            <Link href={html_url} color="blue.500" isExternal>
              @{login}
            </Link>
            {company && <Text mt={2}>Compania: {company}</Text>}
            {location && <Text>bicación: {location}</Text>}
          </Box>
        </Flex>
        <Stack spacing={4} textAlign={["center", "left"]}>
          <Flex wrap="wrap" justify={["center", "flex-start"]} gap={8}>
            <Box>
              <Text fontWeight="bold">
                Seguidores: <Badge colorScheme="green">{followers}</Badge>
              </Text>
              <Text fontWeight="bold">
                Siguiendo: <Badge colorScheme="blue">{following}</Badge>
              </Text>
              <Text fontWeight="bold">
                Repositorios: <Badge colorScheme="blue">{public_repos}</Badge>
              </Text>
            </Box>
          </Flex>
          {blog && (
            <Box>
              <Text fontWeight="bold">Blog:</Text>
              <Link href={blog} color="blue.500" isExternal>
                {blog}
              </Link>
            </Box>
          )}
          <Flex justifyContent={["center", "flex-start"]} mt={4}>
            <Link href={html_url} isExternal>
              <Icon as={FaGithub} boxSize={6} mr={4} color="gray.600" />
            </Link>
            {twitter_username && (
              <Link href={`https://twitter.com/${twitter_username}`} isExternal>
                <Icon as={FaTwitter} boxSize={6} color="blue.400" />
              </Link>
            )}
          </Flex>
          <Button colorScheme="blue" size={"sm"} w={"100%"} onClick={isFavorite ? removeFromFavorite : addToFavorite}>
            {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          </Button>
        </Stack>
      </Box>
    );
  }
);
