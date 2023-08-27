import { HStack, ListItem, Skeleton } from "@chakra-ui/react"

const GameListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton boxSize={"32px"} borderRadius={8} />
        <Skeleton height={6} width="90px" />
      </HStack>
    </ListItem>
  )
}

export default GameListSkeleton
