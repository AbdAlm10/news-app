import { Text, Heading, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/HeadPage/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box p={5}>
        <Heading>OOPS!!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page dose not exist."
            : "An unexpected error ouccurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
