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
    <Stack  direction={{ base: "row", lg: "column" }} spacing={4} justifyContent="center" ref={refProp}>
      <Stack  direction="row" spacing={4} justifyContent="center">
        <Box
          padding="6"
          borderRadius="md"
          bgGradient="linear(to-r, #1f2544, #095379)"
          boxShadow="lg"
          height="30vh"
          mt="5vh"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <SkeletonCircle size="20" />
          <SkeletonText
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"
            width="70%"
          />
        </Box>

        <Box
          padding="6"
          borderRadius="md"
          bgGradient="linear(to-r, #1f2544, #095379)"
          boxShadow="lg"
          height="30vh"
          mt="5vh"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <SkeletonCircle size="20" />
          <SkeletonText
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"
            width="70%"
          />
        </Box>
      </Stack>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Box
          padding="6"
          borderRadius="md"
          bgGradient="linear(to-r, #1f2544, #095379)"
          boxShadow="lg"
          height="30vh"
          mt="5vh"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <SkeletonCircle size="20" />
          <SkeletonText
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"
            width="70%"
          />
        </Box>

        <Box
          padding="6"
          borderRadius="md"
          bgGradient="linear(to-r, #1f2544, #095379)"
          boxShadow="lg"
          height="30vh"
          mt="5vh"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <SkeletonCircle size="20" />
          <SkeletonText
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"
            width="70%"
          />
        </Box>
      </Stack>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Box
          padding="6"
          borderRadius="md"
          bgGradient="linear(to-r, #1f2544, #095379)"
          boxShadow="lg"
          height="30vh"
          mt="5vh"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <SkeletonCircle size="20" />
          <SkeletonText
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"
            width="70%"
          />
        </Box>

        <Box
          padding="6"
          borderRadius="md"
          bgGradient="linear(to-r, #1f2544, #095379)"
          boxShadow="lg"
          height="30vh"
          mt="5vh"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <SkeletonCircle size="20" />
          <SkeletonText
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"
            width="70%"
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default CustomSkeleton;
