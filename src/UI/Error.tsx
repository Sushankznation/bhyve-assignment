"use client";
import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";
import { CustomButton } from ".";
import { RepeatIcon } from "@chakra-ui/icons";
export default function Error() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Encountering an error while Fetching Error
      </Text>
      <Link href="/" passHref>
        <CustomButton colorScheme="red" size="lg">
          <RepeatIcon mr={2} />
          Refresh
        </CustomButton>
      </Link>
    </Flex>
  );
}
