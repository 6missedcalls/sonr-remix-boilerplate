import { Link } from "remix";
import { Box, Center, HStack, Link as ChakraLink } from "@chakra-ui/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6x1 mx-auto">
      <Center>
        <HStack as="nav" spacing={4} p={4}>
          <ChakraLink as={Link} to="/">
            Home
          </ChakraLink>
          <ChakraLink as={Link} to="/i-dont-exist">
            No route
          </ChakraLink>
          <ChakraLink as={Link} to="/an-error">
            Error
          </ChakraLink>
          <ChakraLink as={Link} to="/a-route">
            Real route
          </ChakraLink>
        </HStack>
      </Center>
      <Box as="main" p={4}>
        {children}
      </Box>
    </div>
  );
}
