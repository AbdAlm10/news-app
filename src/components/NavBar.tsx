import { Box, Center, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.webp";

const NavBar = () => {
  return (
    <Box
      p={2}
      borderBottomColor="gray.200"
      borderTopColor="black"
      borderTopWidth={7}
      borderBottomWidth={1}
    >
      <Center>
        <Image src={logo} h="35px" w="132px" />
      </Center>
    </Box>
  );
};

export default NavBar;
