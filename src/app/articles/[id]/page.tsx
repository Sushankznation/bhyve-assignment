import ArticleDetails from "@/components/ArticlesSection/ArticleDetails";
import AppDataProvider from "@/redux/AppDataProvider";
import InitialDataLoader from "@/redux/InitialDataLoader";
import { saveCurrentArticle } from "@/redux/slices/articlesSlice";
import store from "@/redux/store";
import { Articles } from "@/utils/interfaces";
import { getArticleById } from "@/utils/methods";

export default async function ArticlePage({ params }: any) {
  // dispatch data from the server to all the slices as required
  const currentArticle: Articles = await getArticleById(params.id);
  store.dispatch(saveCurrentArticle(currentArticle ?? null));

  return (
    <main>
      <InitialDataLoader data={{ currentArticle }} />

      <AppDataProvider>
        <ArticleDetails />
      </AppDataProvider>
    </main>
  );
}
