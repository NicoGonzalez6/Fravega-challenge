import { API_URL } from "@/constants";
import { UserResponseType, UsersResponseType } from "./user.types";

/**
 * Fetches users from the GitHub API based on a search keyword.
 *
 * @param {string | undefined} keyword - The keyword to search for users. If undefined, fetches all users.
 * @returns {Promise<User[]>} A promise that resolves to an array of User objects.
 */
export const getUsers = async (keyword: string | undefined): Promise<UsersResponseType[]> => {
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

/**
 * Fetches user by username from the GitHub API.
 *
 * @param {string} keyword - The username to search for user.
 * @returns {Promise<User>} A promise that resolves to a User objects.
 */
export const getUserByUsername = async (username: string): Promise<UserResponseType> => {
  const res = await fetch(`${API_URL}/users/${username}`).then((res) => res.json());
  return res;
};
