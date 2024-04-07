import axios from "axios";
import { RequestMethod } from "./interfaces";
import { API_PATHS } from "./ApiSetup";

/**
 * Make an HTTP request using Axios.
 * @param {RequestMethod} method - The request method (GET, POST, PUT, DELETE, etc.).
 * @param {string} url - The URL to make the request to.
 * @param {any} body - The request body data (optional).
 * @returns {Promise<any>} - A promise resolving to the response data.
 */
export const makeRequest = async (
  method: RequestMethod,
  url: string,
  body?: any
): Promise<any> => {
  const response = await axios.request({
    method,
    url,
    data: body,
  });

  return response.data;
};

/**
 * Fetch all articles from the API.
 * @returns {Promise<any>} - A promise resolving to the fetched articles data.
 */
export const getAllArticles = async (): Promise<any> => {
  const data = await makeRequest("GET", API_PATHS.ARTICLES);
  return data;
};

/**
 * Fetch a specific article by its ID.
 * @param {number} articleId - The ID of the article to fetch.
 * @returns {Promise<any>} - A promise resolving to the fetched article data.
 */
export const getArticleById = async (articleId: number): Promise<any> => {
  const data = makeRequest("GET", `${API_PATHS.ARTICLES}/${articleId}`);
  return data;
};

/**
 * Add a new article to the database.
 * @param {any} payload - The data of the article to add.
 * @returns {Promise<any>} - A promise resolving to the response data after adding the article.
 */
export const addAnArticle = async (payload: any): Promise<any> => {
  const data = await makeRequest("POST", API_PATHS.ARTICLES, payload);
  return data;
};

/**
 * Delete a specific article by its ID.
 * @param {number} articleId - The ID of the article to delete.
 * @returns {Promise<any>} - A promise resolving to the response data after deleting the article.
 */
export const deleteAnArticle = async (articleId: number): Promise<any> => {
  const data = await makeRequest(
    "DELETE",
    `${API_PATHS.ARTICLES}/${articleId}`
  );
  return data;
};

/**
 * Update a specific article by its ID.
 * @param {number} articleId - The ID of the article to update.
 * @param {any} payload - The updated data of the article.
 * @returns {Promise<any>} - A promise resolving to the response data after updating the article.
 */
export const updateAnArticle = async (
  articleId: number,
  payload: any
): Promise<any> => {
  const data = makeRequest(
    "PUT",
    `${API_PATHS.ARTICLES}/${articleId}`,
    payload
  );
  return data;
};

/**
 * Convert an object to a query string format.
 * @param {any} obj - The object to convert to a query string.
 * @returns {string} - The generated query string.
 */
export const objectToQueryString = (obj: any): string => {
  const keys = Object.keys(obj);
  const keyValuePairs = keys.map((key) => {
    return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
  });
  return keyValuePairs.join("&");
};
