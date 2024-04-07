import {
  Stack,
  Box,
  Flex,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

interface CustomSkeletonProps {
  refProp?: React.Ref<HTMLDivElement> | null;
}
const CustomSkeleton: React.FC<CustomSkeletonProps> = ({ refProp }) => {
  return (
    <Stack direction="column" spacing={4} justifyContent="center" ref={refProp}>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Box
          padding="6"
          borderRadius="md"
          bgGradient="linear(to-r, #1f2544, #095379)"
          boxShadow="lg"
          height="40vh"
          mt="5vh"
          width="100%"
        >
          <Flex justifyContent="center" alignItems="center" height="40%">
            <SkeletonCircle size="20" />
          </Flex>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
        <Box
          padding="6"
          borderRadius="md"
          boxShadow="lg"
          bgGradient="linear(to-r, #1f2544, #095379)"
          height="40vh"
          mt="5vh"
          width="100%"
        >
          <Flex justifyContent="center" alignItems="center" height="40%">
            <SkeletonCircle size="20" />
          </Flex>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      </Stack>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Box
          padding="6"
          borderRadius="md"
          boxShadow="lg"
          bgGradient="linear(to-r, #1f2544, #095379)"
          height="40vh"
          mt="5vh"
          width="100%"
        >
          <Flex justifyContent="center" alignItems="center" height="40%">
            <SkeletonCircle size="20" />
          </Flex>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
        <Box
          padding="6"
          borderRadius="md"
          boxShadow="lg"
          bgGradient="linear(to-r, #1f2544, #095379)"
          height="40vh"
          mt="5vh"
          width="100%"
        >
          <Flex justifyContent="center" alignItems="center" height="40%">
            <SkeletonCircle size="20" />
          </Flex>
          <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="2" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default CustomSkeleton;
