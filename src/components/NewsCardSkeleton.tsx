import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const NewsCardSkeleton = () => {
  return (
    <Card p={5}>
      <Skeleton h="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default NewsCardSkeleton;
