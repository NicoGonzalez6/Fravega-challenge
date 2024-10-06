import { getUsers } from "@/services/user";
import { UsersResponseType } from "@/services/user/user.types";
import { PageLayout, SectionWrapper, UserCard } from "@/components";
import { useDebounce } from "@/hooks/useDebounce";
import { Button, Flex } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useFavoriteUserStore } from "@/hooks/useFavoriteUserStore";
import Link from "next/link";

const SEARCH_PARAM = "username";

export default function Home({ data }: { data: { users: UsersResponseType[] } }) {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce({ value, delay: 500 });
  const params = useSearchParams();
  const router = useRouter();
  const { addToFavorite, favoriteUsers, removeFromFavorite, isFavoriteUserById } = useFavoriteUserStore();

  const searchUser = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(params);
    if (debounceValue) {
      searchParams.set(SEARCH_PARAM, debounceValue);
    } else {
      searchParams.delete(SEARCH_PARAM);
    }
    const queryString = searchParams.toString();
    if (queryString) {
      router.replace(`?${queryString}`);
    } else {
      router.replace(router.pathname);
    }
  }, [debounceValue]);

  const renderUsers = useCallback(() => {
    return data?.users?.map((user) => (
      <UserCard key={user.id} {...user} addToFavorite={() => addToFavorite(user)} removeFromFavorite={() => removeFromFavorite(user.id)} isFavorite={isFavoriteUserById(user.id)} />
    ));
  }, [data.users, favoriteUsers]);

  return (
    <PageLayout>
      <SectionWrapper title="Buscar usuario">
        <Input w={["100%", 350]} size={"sm"} value={value} onChange={searchUser} />
      </SectionWrapper>
      <SectionWrapper title="Usuarios">
        <Button colorScheme="blue" w={["100%", 200]} size={"sm"}>
          <Link style={{ width: "100%" }} href={"/favorites"}>
            Mis Favoritos
          </Link>
        </Button>
        <Flex gap={8} flexWrap={"wrap"} justify={"space-evenly"}>
          {renderUsers()}
        </Flex>
      </SectionWrapper>
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.query;
  const users = await getUsers(username as string | undefined);
  return {
    props: {
      data: {
        users,
      },
    },
  };
};
