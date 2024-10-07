import { UserCardsSection, SectionWrapper } from "@/components";
import { PageLayout } from "@/layouts";
import { useFavoriteUserStore } from "@/hooks/useFavoriteUserStore";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

export default function Favorites() {
  const { favoriteUsers } = useFavoriteUserStore();

  return (
    <PageLayout>
      <SectionWrapper title="Usuarios">
        <UserCardsSection data={{ users: favoriteUsers }} />
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
