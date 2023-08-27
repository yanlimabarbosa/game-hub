import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"
import GameListSkeleton from "./GameListSkeleton"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()
  const skeletons = Array.from({ length: 20 })

  if (error) return null

  return (
    <List>
      {isLoading &&
        skeletons.map((_, index) => <GameListSkeleton key={index} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
export default GenreList
