import { API_URL } from "@/constants";
import { User } from "./user.types";

/**
 * Fetches users from the GitHub API based on a search keyword.
 *
 * @param {string | undefined} keyword - The keyword to search for users. If undefined, fetches all users.
 * @returns {Promise<User[]>} A promise that resolves to an array of User objects.
 */
export const getUsers = async (keyword: string | undefined): Promise<User[]> => {
  let users;
  if (keyword) {
    const res = await fetch(`${API_URL}/search/users?q=${keyword}`).then((res) => res.json());
    users = res.items;
  } else {
    const res = await fetch(`${API_URL}/users`).then((res) => res.json());
    users = res;
  }
  return users;
};
