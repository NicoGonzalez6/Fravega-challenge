import { getUsers } from "@/services/user";
import { UsersResponseType } from "@/services/user/user.types";
import { UserCardsSection, SearchInput, SectionWrapper } from "@/components";
import { PageLayout } from "@/layouts";
import { useDebounce } from "@/hooks/useDebounce";
import { Button, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

import Link from "next/link";

const SEARCH_PARAM = "username";

export default function Home({ data }: { data: UsersResponseType[] | string }) {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce({ value: value });
  const params = useSearchParams();
  const router = useRouter();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <PageLayout>
      <SectionWrapper title="Buscar usuario" testId="searchInputSection">
        <SearchInput value={value} onChange={handleInputChange} />
      </SectionWrapper>
      <SectionWrapper title="Usuarios" testId="usersSection">
        <Button as={Link} colorScheme="blue" w={["100%", 200]} size={"sm"} href={"/favorites"}>
          Mis Favoritos
        </Button>
        {typeof data === "string" ? <Text>{data}</Text> : <UserCardsSection data={data} />}
      </SectionWrapper>
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.query;
  const response = await getUsers(username as string | undefined);

  return {
    props: {
      data: response,
    },
  };
};
