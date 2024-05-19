import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Layout from "./Layout";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Layout />

      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="40vh"
        width="75vw"
        marginLeft="12.5vw"
        borderRadius={20}
        marginY={10}
      >
        <AlertIcon boxSize="50px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="xl">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An un enexpted error occured"}
        </AlertTitle>
      </Alert>
    </>
  );
};

export default ErrorPage;
