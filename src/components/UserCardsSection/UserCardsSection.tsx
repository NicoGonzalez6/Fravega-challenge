import { Flex, Text } from "@chakra-ui/react";
import { memo } from "react";
import { UserCard } from "../UserCard/UserCard";
import { useFavoriteUserStore } from "@/hooks/useFavoriteUserStore";
import { UsersResponseType } from "@/services/user/user.types";

export const UserCardsSection = memo(({ data }: { data: UsersResponseType[] }) => {
  const { addToFavorite, removeFromFavorite, isFavoriteUserById } = useFavoriteUserStore();
  return (
    <Flex gap={8} flexWrap={"wrap"} justify={"space-evenly"}>
      {data?.length >= 1 ? (
        data?.map((user) => (
          <UserCard
            key={user.id}
            {...user}
            addToFavorite={() => addToFavorite(user)}
            removeFromFavorite={() => removeFromFavorite(user.id)}
            isFavorite={isFavoriteUserById(user.id)}
          />
        ))
      ) : (
        <Text fontWeight={"bold"} size={"xl"}>
          Sin información
        </Text>
      )}
    </Flex>
  );
});
