"use client";
import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { getArticles } from "@/utils/getArticles";
import { saveArticlesData } from "@/redux/slices/articlesSlice";
import { CustomSkelton, ScrollToTopButton, Error } from "@/UI";
import { RootType } from "@/redux/store";
import { Articles } from "@/utils/interfaces";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "./ArticleCard";
import React, { useEffect, useState } from "react";

const ArticlesSection = () => {
  const { articles } = useSelector((state: RootType) => state.articlesSlice);
  const { ref, inView } = useInView();
  const dispatch = useDispatch();

  const [pageOffset, setPageOffset] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // State to track error message

  useEffect(() => {
    if (inView) setPageOffset((state) => (state += 1));
  }, [inView]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getArticles({ page: pageOffset, limit: 10 });
        if (res.length !== 0) {
          dispatch(saveArticlesData(res));
        } else {
          setLoader(false);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoader(false);
        setError("Error in fetching data"); // Set error message state
      }
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
  }, [pageOffset]);

  return (
    <Box sx={{ margin: "1rem 2rem", position: "relative" }}>
      {error ? ( //  error if error exists
        <Error />
      ) : (
        <>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            gap={8}
          >
            {articles.map((item: Articles, index: number) => (
              <Stack key={item.id + index} gap={6}>
                <ArticleCard article={item} />
              </Stack>
            ))}
          </Grid>
          {loader && <CustomSkelton refProp={ref} />}
          <ScrollToTopButton />
        </>
      )}
    </Box>
  );
};

export default ArticlesSection;
