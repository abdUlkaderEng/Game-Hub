import { Box } from "@chakra-ui/react";
import NaveBar from "../components/NaveBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NaveBar />
      <Box padding={10}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
