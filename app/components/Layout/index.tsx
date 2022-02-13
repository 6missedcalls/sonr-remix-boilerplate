import { Link } from "remix";
import { Box, Center, HStack, Link as ChakraLink } from "@chakra-ui/react";

export function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <>
      <Center>
        <HStack as="nav" spacing={4} p={4}>
          <ChakraLink as={Link} to="/">
            Home
          </ChakraLink>
        </HStack>
      </Center>
      <Box as="main">
        {children}
      </Box>
    </>
  );
}