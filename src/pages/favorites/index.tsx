import { UserCardsSection, SectionWrapper } from "@/components";
import { PageLayout } from "@/layouts";
import { useFavoriteUserStore } from "@/hooks/useFavoriteUserStore";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

export default function Favorites() {
  const { favoriteUsers } = useFavoriteUserStore();

  return (
    <PageLayout>
      <SectionWrapper title="Usuarios">
        <UserCardsSection data={favoriteUsers} />
        <Button as={Link} href={"/"} colorScheme="blue" size={"sm"} w={["100%", 200]}>
          Volver al inicio
        </Button>
      </SectionWrapper>
    </PageLayout>
  );
}
