import { getUsers } from "@/services/user";
import { User } from "@/services/user/user.types";
import { ProfileCard, SectionWrapper } from "@/components";
import { useDebounce } from "@/hooks/useDebounce";
import { Flex, Stack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const SEARCH_PARAM = "keyword";

export default function Home({ data }: { data: { users: User[] } }) {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce({ value });
  const params = useSearchParams();
  const router = useRouter();

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

  return (
    <Stack gap={4}>
      <SectionWrapper title="Buscar usuario">
        <Input w={350} size={"sm"} value={value} onChange={searchUser} />
      </SectionWrapper>
      <SectionWrapper title="Usuarios">
        <Flex gap={8} flexWrap={"wrap"}>
          {data?.users?.map((user) => {
            return <ProfileCard key={user.id} {...user} />;
          })}
        </Flex>
      </SectionWrapper>
    </Stack>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { keyword } = context.query;
  const users = await getUsers(keyword as string | undefined);
  return {
    props: { data: users },
  };
};
