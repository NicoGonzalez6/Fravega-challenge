import { ProfileCard, SectionWrapper } from "@/components";
import { useFavoriteUserStore } from "@/hooks/useFavoriteUserStore";
import { getUserByUsername } from "@/services";
import { type UserResponseType } from "@/services/user/user.types";
import { Button, Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

export default function UserDetails({ data }: { data: UserResponseType | string }) {
  const { addToFavorite, removeFromFavorite, isFavoriteUserById } = useFavoriteUserStore();

  return (
    <SectionWrapper title="Detalles">
      {typeof data === "string" ? (
        <Text>{data}</Text>
      ) : (
        <ProfileCard {...data} addToFavorite={() => addToFavorite(data)} removeFromFavorite={() => removeFromFavorite(data.id)} isFavorite={isFavoriteUserById(data.id)} />
      )}
      <Flex gap={4} flexWrap={"wrap"}>
        <Button as={Link} href={"/"} colorScheme="blue" size={"sm"} w={["100%", 200]}>
          Volver al inicio
        </Button>
        <Button as={Link} href={"/favorites"} colorScheme="blue" size={"sm"} w={["100%", 200]}>
          Ir a mis favoritos
        </Button>
      </Flex>
    </SectionWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await getUserByUsername(ctx.params?.username as string);

  return {
    props: {
      data: response,
    },
  };
};
