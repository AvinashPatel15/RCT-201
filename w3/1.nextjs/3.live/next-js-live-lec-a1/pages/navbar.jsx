import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        marginTop={"10px"}
      >
        <Box p="2">
          <Link href="/">
            <Button colorScheme="teal">Home</Button>
          </Link>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Link href="/counter">
            <Button colorScheme="teal">Counter App</Button>
          </Link>
          <Link href="/todo">
            <Button colorScheme="teal">Todo App</Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Navbar;
