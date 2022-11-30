import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
