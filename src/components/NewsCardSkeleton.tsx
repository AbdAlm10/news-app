import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const NewsCardSkeleton = () => {
  return (
    <Card p={5} shadow={0}>
      <Skeleton h="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default NewsCardSkeleton;
