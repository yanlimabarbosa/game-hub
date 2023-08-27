import { HStack, Image, List, ListItem, Button } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"
import GameListSkeleton from "./GameListSkeleton"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize={"lg"}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
export default GenreList
