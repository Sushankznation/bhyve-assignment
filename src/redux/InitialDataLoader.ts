"use client";

import { useRef } from "react";
import store from "./store";
import { saveArticlesData, saveCurrentArticle } from "./slices/articlesSlice";

const InitialDataLoader = ({ data }: any) => {
  const loaded = useRef(false);

  if (!loaded.current) {
    if (data.articles) store.dispatch(saveArticlesData(data.articles));
    if (data.currentArticle)
      store.dispatch(saveCurrentArticle(data.currentArticle));
    loaded.current = true;
  }

  return null;
};

export default InitialDataLoader;
