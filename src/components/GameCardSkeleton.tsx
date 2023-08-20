import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  useBreakpointValue,
} from "@chakra-ui/react"

const GameCardSkeleton = () => {
  const cardWidth = useBreakpointValue({
    base: "",
    md: "100%",
    lg: "240px",
    "2xl": "350px",
  })

  return (
    <Card width={cardWidth} overflow={"hidden"}>
      <Skeleton height={200}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
