import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={50} />
      <SearchInput onSearch={onSearch} />
      <Text>
        <ColorModeSwitch />
      </Text>
    </HStack>
  )
}
export default NavBar
