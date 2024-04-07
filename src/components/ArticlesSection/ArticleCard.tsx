import { Articles } from "@/utils/interfaces";
import { Avatar, Flex, Text, GridItem, Stack } from "@chakra-ui/react";
import Link from "next/link";
interface ArticleCardProps {
  article: Articles;
}
import { CustomButton } from "@/UI";
export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <GridItem>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        overflow="hidden"
        bgGradient="linear(to-r, #1f2544, #095379)"
        p={4}
        boxShadow="lg"
        height="40vh"
      >
        <Avatar name={article.name} src={article.avatar} size="xl" />
        <Stack spacing={2} mt={4} textAlign="center">
          <Text fontWeight="bold" fontSize="lg" color="white">
            {article.name}
          </Text>
          <Text fontWeight="bold" fontSize="sm" color="white" mt="2">
            Posted On :{" "}
            <Text as="span" fontWeight="normal">
              {new Date(article.createdAt).toLocaleString("en-US", {
                dateStyle: "medium",
              })}
            </Text>
          </Text>

          <Text color="#98ABEE" noOfLines={2} fontStyle="italic">
            {"“"}
            {article.description}
            {"”"}
          </Text>
        </Stack>
        <Link href={`/articles/${article.id}`}>
          <CustomButton
            variant="solid"
            fontWeight={400}
            backgroundColor="#A3C7D6"
            color="black"
            _hover={{ backgroundColor: "white", color: "black" }}
            sx={{ padding: "8px 16px !important" }}
            width="max-content"
            size="sm"
            mt={4}
          >
            View
          </CustomButton>
        </Link>
      </Flex>
    </GridItem>
  );
}
