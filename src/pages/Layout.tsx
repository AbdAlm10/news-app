import NavBar from "../components/HeadPage/NavBar";
import { Outlet } from "react-router-dom";
import SearchNews from "../components/HeadPage/SearchNews";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <SearchNews />
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
