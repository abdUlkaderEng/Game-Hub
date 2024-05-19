import {
    Alert,
    AlertIcon,
    AlertTitle
} from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NaveBar from "../components/NaveBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NaveBar />

      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="40vh"
        width="50vw"
        marginLeft="25vw"
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
