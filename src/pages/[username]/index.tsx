import { ProfileCard, SectionWrapper } from "@/components";
import { getUserByUsername } from "@/services";
import { type UserResponseType } from "@/services/user/user.types";
import { Button } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

export default function UserDetails({ data }: { data: UserResponseType }) {
  return (
    <SectionWrapper title="Detalles">
      <ProfileCard {...data} />
      <Button colorScheme="blue" size={"sm"} w={["100%", 200]}>
        <Link style={{ width: "100%" }} href={"/"}>
          Volver al inicio
        </Link>
      </Button>
    </SectionWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = await getUserByUsername(ctx.params?.username as string);
  return {
    props: {
      data: user,
    },
  };
};
