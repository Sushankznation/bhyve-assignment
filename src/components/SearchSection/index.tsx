import { Articles } from "@/utils/interfaces";
import {
  Avatar,
  Box,
  Flex,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface SearchSectionProps {
  searchedArticles: Articles[];
  setSearchText: any;
}

export default function SearchSection({
  searchedArticles,
}: SearchSectionProps) {
  return (
    <Stack>
      <Box
        maxH="300px"
        overflowY="auto"
        backgroundColor="#1E2646"
        m="1rem"
        rounded="md"
      >
        <List spacing={4}>
          {searchedArticles.map((item: Articles) => {
            return (
              <ListItem
                key={item.id}
                backgroundColor="#DCD7C9"
                rounded="md"
                m="1rem"
              >
                <Link href={`/articles/${item.id}`}>
                  <Flex align="center" p={3}>
                    <Avatar name={item.name} src={item.avatar} />
                    <Stack ml={3}>
                      <Text fontSize="lg" fontWeight="600" color="black">
                        {item.name}
                      </Text>
                      <Text fontSize="sm" noOfLines={2}>
                        {item.description}
                      </Text>
                    </Stack>
                  </Flex>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Stack>
  );
}
