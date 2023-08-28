import bullsEye from "../assets/bulls-eye.webp"
import thumbsUp from "../assets/thumbs-up.webp"
import meh from "../assets/meh.webp"
import { Image } from "@chakra-ui/react"
import { ImageProps } from "@chakra-ui/react"

interface Props {
  rating: number
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "23px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "22px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "28px" },
  }

  return <Image marginTop={2} {...emojiMap[rating]} />
}
export default Emoji
