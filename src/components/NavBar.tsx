import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize={50} />
      <Text>
        <ColorModeSwitch />
      </Text>
    </HStack>
  )
}
export default NavBar
