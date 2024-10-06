import { UsersResponseType } from "@/services/user/user.types";
import React, { createContext, useState, useCallback, useMemo } from "react";

interface FavoriteUserStoreContextType {
  favoriteUsers: UsersResponseType[];
  addToFavorite: (user: UsersResponseType) => void;
  removeFromFavorite: (id: number) => void;
  isFavoriteUserById: (id: number) => boolean;
}

export const FavoriteUserStore = createContext<FavoriteUserStoreContextType | undefined>(undefined);

interface FavoriteUserStoreProviderProps {
  children: React.ReactNode;
}

export const FavoriteUserStoreProvider: React.FC<FavoriteUserStoreProviderProps> = ({ children }) => {
  const [favoriteUsers, setFavoriteUsers] = useState<UsersResponseType[]>([]);

  const addToFavorite = useCallback((user: UsersResponseType) => {
    setFavoriteUsers((prevUsers) => {
      if (prevUsers.some((u) => u.id === user.id)) return prevUsers;
      return [...prevUsers, user];
    });
  }, []);

  const removeFromFavorite = useCallback((id: number) => {
    setFavoriteUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  }, []);

  const isFavoriteUserById = useCallback(
    (id: number) => {
      return favoriteUsers.some((user) => user.id === id);
    },
    [favoriteUsers]
  );

  const value = useMemo(() => ({ favoriteUsers, addToFavorite, removeFromFavorite, isFavoriteUserById }), [favoriteUsers, addToFavorite, removeFromFavorite, isFavoriteUserById]);

  return <FavoriteUserStore.Provider value={value}>{children}</FavoriteUserStore.Provider>;
};
