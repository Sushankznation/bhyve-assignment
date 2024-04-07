"use client";
import { useEffect } from "react";
import store from "./store";
import { saveArticlesData, saveCurrentArticle } from "./slices/articlesSlice";

const InitialDataLoader = ({ data }: any) => {
  useEffect(() => {
    // Dispatch actions to save articles data and current article to the Redux store
    if (data.articles) store.dispatch(saveArticlesData(data.articles));
    if (data.currentArticle)
      store.dispatch(saveCurrentArticle(data.currentArticle));
  }, [data]);

  return null;
};

export default InitialDataLoader;
