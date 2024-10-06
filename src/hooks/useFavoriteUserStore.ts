import { FavoriteUserStore } from "@/context";
import { useContext } from "react";

export const useFavoriteUserStore = () => {
  const context = useContext(FavoriteUserStore);
  if (!context) {
    throw new Error("useFavoriteUserStore must be used within a FavoriteUserStoreProvider");
  }
  return context;
};
