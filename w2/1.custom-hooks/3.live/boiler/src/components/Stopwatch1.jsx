import React from "react";
import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";
import useStopwatch from "../hooks/useStopwatch";

const Stopwatch1 = () => {

  const { time, start, pause, reset, addSeconds } = useStopwatch();

  return (
    <Box border={"1px solid black"} borderRadius={4} m={2} p={2}>
      <Center>
        <Heading>{time}</Heading>
      </Center>
      <Flex gap={2} my={2}>
        <Button onClick={start} colorScheme="green">
          Start
        </Button>
        <Button onClick={pause} colorScheme="yellow">
          Pause
        </Button>
        <Button onClick={reset} colorScheme="red">
          Reset
        </Button>
      </Flex>
      <Flex gap={2}>
        <Button onClick={() => addSeconds(5)} colorScheme="green">
          Add 5 Seconds
        </Button>
        <Button onClick={() => addSeconds(15)} colorScheme="yellow">
          Add 15 Seconds
        </Button>
        <Button onClick={() => addSeconds(25)} colorScheme="red">
          Add 25 Seconds
        </Button>
      </Flex>
    </Box>
  );
};

export default Stopwatch1;
