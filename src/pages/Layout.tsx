import NavBar from "../components/HeadPage/NavBar";
import { Outlet } from "react-router-dom";
import SearchNews from "../components/HeadPage/SearchNews";
import TopicsSelector from "../components/HeadPage/TopicsSelector";

const Layout = () => {
  return (
    <>
      <NavBar />
      <SearchNews />
      <TopicsSelector />
      <Outlet />
    </>
  );
};

export default Layout;
