"use server";

import { API_PATHS } from "@/utils/ApiSetup";
import { apiFetchOptions } from "@/utils/interfaces";
import { makeRequest, objectToQueryString } from "@/utils/methods";

/**
 *
 * @param {apiFetchOptions} options
 * @returns
 */
export const getArticles = async (options: apiFetchOptions) => {
  try {
    const url = `${API_PATHS.ARTICLES}?${objectToQueryString(options)}`;
    const response = await makeRequest("GET", url);
    return response;
  } catch (error: unknown) {
    console.log(`Error in : ${error}`);
  }
};
