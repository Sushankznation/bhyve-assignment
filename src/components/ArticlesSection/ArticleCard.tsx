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
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="space-around"
        borderRadius="md"
        overflow="hidden"
        bgGradient="linear(to-r, #1f2544, #095379)"
        p={4}
        boxShadow="xl"
        height={{ base: "40vh", lg: "30vh" }}
        textAlign="left"
      >
        <Avatar
          name={article.name}
          src={article.avatar}
          size="xl"
          objectFit="cover"
        />
        <Stack spacing={1} mt={4} textAlign="left" width="60%">
          <Text fontWeight="bold" fontSize="lg" color="white">
            {article.name}
          </Text>
          <Text fontWeight="bold" fontSize="sm" color="white">
            Product Name : {article.productName}
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
            {article.description.split(" ").slice(0, 5).join(" ")}... {"”"}
          </Text>
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
            >
              View
            </CustomButton>
          </Link>
        </Stack>
      </Flex>
    </GridItem>
  );
}
