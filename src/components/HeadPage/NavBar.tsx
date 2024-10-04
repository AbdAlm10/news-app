import { Box, Center, Image, useColorMode } from "@chakra-ui/react";
import logo from "../../assets/Logo.webp";
import LogoWhite from "../../assets/LogoWhite.webp";

const NavBar = () => {
  const { colorMode } = useColorMode();

  const sizes = {
    h: "35px",
    w: "132px",
  };
  return (
    <Box
      p={2}
      borderBottomColor="gray.200"
      borderTopColor={colorMode === "dark" ? "white" : "black"}
      borderTopWidth={7}
      borderBottomWidth={1}
    >
      <Center>
        {colorMode === "dark" ? (
          <Image src={LogoWhite} w={sizes.w} h={sizes.h} />
        ) : (
          <Image src={logo} w={sizes.w} h={sizes.h} />
        )}
      </Center>
    </Box>
  );
};

export default NavBar;
