import Link from "next/link";
import { Button, Flex, Text } from "@chakra-ui/react";
import { CustomButton } from "@/UI";
export default function Foo() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        No Page Found !
      </Text>
      <Link href="/" passHref>
        <CustomButton colorScheme="blue" size="lg">
          Go Back Home
        </CustomButton>
      </Link>
    </Flex>
  );
}
