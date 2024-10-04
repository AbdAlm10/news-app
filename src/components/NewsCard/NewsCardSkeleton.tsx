import { Box, Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const NewsCardSkeleton = () => {
  return (
    <Box>
      <Card boxShadow="none">
        <Skeleton w="auto" h="200px" />
        <CardBody p={0} my={2}>
          <SkeletonText />
        </CardBody>
      </Card>
    </Box>
  );
};

export default NewsCardSkeleton;
