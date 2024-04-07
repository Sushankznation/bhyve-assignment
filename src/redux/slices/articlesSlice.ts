import { Articles } from "@/utils/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ArticlesSliceState {
  articles: Articles[]; // Array to store fetched articles
  currentArticle: Articles | null; // Store currently selected article
  searchedArticles: Articles[]; // Store articles filtered by search
}

const initialState: ArticlesSliceState = {
  articles: [], // Initial state for fetched articles
  currentArticle: null, // Initial state for currently selected article
  searchedArticles: [], // Initial state for search results
};

const articlesSlice = createSlice({
  name: "Articles",
  initialState, 
  reducers: {
    saveArticlesData: (
      state: ArticlesSliceState,
      action: PayloadAction<Articles[]>
    ) => {
      // Reducer to save fetched articles
      state.articles = state.articles.concat(action.payload);
    },
    removeArticle(state, action: PayloadAction<number>) {
      // Reducer to remove article from state
      const articleId = action.payload;
      state.articles = state.articles.filter(
        (article) => article.id !== articleId
      );
    },
    clearCurrentArticle: (state: ArticlesSliceState) => {
      // Reducer to clear current article from state
      state.currentArticle = null;
    },
    saveCurrentArticle: (
      state: ArticlesSliceState,
      action: PayloadAction<Articles | null>
    ) => {
      // Reducer to save current article to state
      state.currentArticle = action.payload;
    },
    setSearchResults: (
      state: ArticlesSliceState,
      action: PayloadAction<Articles[]>
    ) => {
      // Reducer to set search results
      state.searchedArticles = action.payload;
    },
    updateArticleInList: (
      state: ArticlesSliceState,
      action: PayloadAction<Articles>
    ) => {
      // Reducer to update article in the list
      const updatedArticle = action.payload;
      const index = state.articles.findIndex(
        (article) => article.id === updatedArticle.id
      );
      if (index !== -1) {
        state.articles[index] = updatedArticle;
      }
    },
  },
});

export const {
  saveArticlesData,
  saveCurrentArticle,
  setSearchResults,
  removeArticle,
  clearCurrentArticle,
  updateArticleInList,
} = articlesSlice.actions; 
export default articlesSlice.reducer;