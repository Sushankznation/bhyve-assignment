import { getArticles } from "@/utils/getArticles";
import ArticlesSection from "@/components/ArticlesSection";
import AppDataProvider from "@/redux/AppDataProvider";
import InitialDataLoader from "@/redux/InitialDataLoader";
import { saveArticlesData } from "@/redux/slices/articlesSlice";
import store from "@/redux/store";

export default async function Home() {
  let articles = [];

  if (store.getState().articlesSlice.articles.length === 0) {
    articles = await getArticles({ page: 1, limit: 10 });
    store.dispatch(saveArticlesData(articles));
  }

  return (
    <main>
      {store.getState().articlesSlice.articles.length === 0 && (
        <InitialDataLoader data={{ articles }} />
      )}

      <AppDataProvider>
        <ArticlesSection />
      </AppDataProvider>
    </main>
  );
}
