import { SectionWrapper, UserCard } from "@/components";
import { PageLayout } from "@/layouts";
import { useFavoriteUserStore } from "@/hooks/useFavoriteUserStore";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

import React, { useCallback } from "react";

export default function Favorites() {
  const { addToFavorite, favoriteUsers, removeFromFavorite, isFavoriteUserById } = useFavoriteUserStore();

  const renderUsers = useCallback(() => {
    return favoriteUsers?.map((user) => (
      <UserCard key={user.id} {...user} addToFavorite={() => addToFavorite(user)} removeFromFavorite={() => removeFromFavorite(user.id)} isFavorite={isFavoriteUserById(user.id)} />
    ));
  }, [favoriteUsers]);

  return (
    <PageLayout>
      <SectionWrapper title="Usuarios">
        <Flex gap={8} flexWrap={"wrap"} justify={"center"} mt={4}>
          {renderUsers()}
        </Flex>
        <Flex gap={4} flexWrap={"wrap"}>
          <Button as={Link} href={"/"} colorScheme="blue" size={"sm"} w={["100%", 200]}>
            Volver al inicio
          </Button>
          <Button as={Link} href={"/favorites"} colorScheme="blue" size={"sm"} w={["100%", 200]}>
            Ir a mis favoritos
          </Button>
        </Flex>
      </SectionWrapper>
    </PageLayout>
  );
}
