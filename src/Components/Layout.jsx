import React from "react";
import "../Css/style.css";
import { Flex, Box } from "@chakra-ui/react";
import EntryForm from "../ResumeFormat/EntryForm";
import Output from "../ResumeFormat/Output";
const Layout = () => {
  return (
    <Flex>
      <Box flex="1" bg="white">
        <EntryForm />
      </Box>
      <Box flex="1" bg="grey">
        <Output />
      </Box>
    </Flex>
  );
};

export default Layout;
