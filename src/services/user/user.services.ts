import { API_URL } from "@/constants";
import { UserResponseType, UsersResponseType } from "./user.types";
import axios, { AxiosResponse } from "axios";
import { serializeAxiosError } from "@/utils";

/**
 * Fetches users from the GitHub API based on a search keyword.
 *
 * @param {string | undefined} keyword - The keyword to search for users. If undefined, fetches all users.
 * @returns {Promise<UsersResponseType[]>} A promise that resolves to an array of User objects.
 */
export const getUsers = async (keyword: string | undefined): Promise<UsersResponseType[] | string> => {
  try {
    let users;
    if (keyword) {
      const res: AxiosResponse<{ items: UsersResponseType[] }> = await axios(`${API_URL}/search/users?q=${keyword}`);
      users = res.data.items;
    } else {
      const res: AxiosResponse<UsersResponseType[]> = await axios(`${API_URL}/users`);
      users = res.data;
    }
    return users;
  } catch (error) {
    const errorMessage = serializeAxiosError(error);
    return errorMessage;
  }
};

/**
 * Fetches user by username from the GitHub API.
 *
 * @param {string} keyword - The username to search for user.
 * @returns {Promise<UserResponseType>} A promise that resolves to a User objects.
 */
export const getUserByUsername = async (username: string): Promise<UserResponseType | string> => {
  try {
    const res = await axios.get<UserResponseType>(`${API_URL}/users/${username}`);
    return res.data;
  } catch (error) {
    const errorMessage = serializeAxiosError(error);
    return errorMessage;
  }
};
