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
        <Button colorScheme="blue" w={["100%", 200]} size={"sm"}>
          <Link style={{ width: "100%" }} href={"/"}>
            Volver al inicio
          </Link>
        </Button>
      </SectionWrapper>
    </PageLayout>
  );
}
