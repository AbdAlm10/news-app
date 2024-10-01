import { Box, Center, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.webp";

const NavBar = () => {
  return (
    <Box p={2} border="1px" borderColor="gray.200">
      <Center>
        <Image src={logo} h="35px" w="132px" />
      </Center>
    </Box>
  );
};

export default NavBar;
