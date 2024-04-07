"use client"
import React, { useEffect, useState } from "react";
import {
  Flex,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  ScaleFade,
  Button,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Articles } from "@/utils/interfaces";
import { getAllArticles } from "@/utils/methods";
import { setSearchResults } from "@/redux/slices/articlesSlice";
import { RootType } from "@/redux/store";
import SearchSection from "../SearchSection";
import AppDataProvider from "@/redux/AppDataProvider";
import CreateProduct from "@/components/CreateArticle";

export default function Navbar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    // Fetch articles when searchText changes
    if (searchText && searchText !== "") {
      getAllArticles().then((res) => {
        // Filter articles based on search text
        const searchResults: Articles[] = [...res].filter((item: Articles) => {
          return item.name.toLowerCase().includes(searchText.toLowerCase());
        });
        // Update search results in Redux state
        dispatch(setSearchResults(searchResults));
      });
    } else {
      // Clear search results if search text is empty
      dispatch(setSearchResults([]));
    }
  }, [searchText]);

  const { searchedArticles } = useSelector(
    (state: RootType) => state.articlesSlice
  );

  // Function to clear search results and search text
  const clearSearchResults = () => {
    dispatch(setSearchResults([])); // Clear search results in Redux state
    setSearchText(""); // Clear search text
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      bgGradient="linear(to-r, #1f2544, #095379)"
      color="#B4A5A5"
      px={4}
      py={3}
      position="sticky"
      top={2}
      zIndex={999}
      borderRadius="md"
    >
      {/* Brand name */}
      <Text fontSize="3xl" fontWeight={600} paddingRight="10px">
        blogMe
      </Text>

      {/* Search input */}
      <InputGroup position="relative">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.600" />
        </InputLeftElement>
        <Input
          placeholder="Search articles here..."
          size="lg"
          variant="outline"
          bg="#DCD7C9"
          color="gray.700"
          focusBorderColor="gray.600"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* Clear search button */}
        {searchText && (
          <Button
            variant="unstyled"
            size="sm"
            onClick={clearSearchResults}
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            zIndex={999}
          >
            <CloseIcon color="gray.600" />
          </Button>
        )}
        {/* Search results */}
        <ScaleFade
          in={searchedArticles.length !== 0}
          style={{ position: "absolute", left: 0, top: "100%", width: "50%" }}
        >
          <SearchSection
            searchedArticles={searchedArticles}
            setSearchText={setSearchText}
          />
        </ScaleFade>
      </InputGroup>

      {/* Redux provider and CreateProduct component */}
      <AppDataProvider>
        <CreateProduct />
      </AppDataProvider>
    </Flex>
  );
}
