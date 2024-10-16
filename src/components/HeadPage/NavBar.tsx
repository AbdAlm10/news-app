import { Box, Center, Image, useColorMode } from "@chakra-ui/react";
import logo from "../../assets/Logo.webp";
import LogoWhite from "../../assets/LogoWhite.webp";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { colorMode } = useColorMode();

  const sizes = {
    h: "35px",
    w: "132px",
  };
  return (
    <Box
      p={2}
      borderBottomColor={colorMode === "dark" ? "gray.700" : "gray.200"}
      borderTopColor={colorMode === "dark" ? "gray.900" : "black"}
      borderTopWidth={7}
      borderBottomWidth={1}
    >
      <Center>
        <Link to="/">
          {colorMode === "dark" ? (
            <Image src={LogoWhite} w={sizes.w} h={sizes.h} />
          ) : (
            <Image src={logo} w={sizes.w} h={sizes.h} />
          )}
        </Link>
      </Center>
    </Box>
  );
};

export default NavBar;
