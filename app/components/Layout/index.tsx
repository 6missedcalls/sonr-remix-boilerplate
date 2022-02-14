import { Link } from "remix";
import { Box, Center, HStack, Link as ChakraLink, Flex, Stack, useColorModeValue as mode, Circle} from "@chakra-ui/react";
import {
  BiBuoy,
  BiCog,
  BiCommentAdd,
  BiCreditCard,
  BiEnvelope,
  BiGasPump,
  BiHome,
  BiNews,
  BiPurchaseTagAlt,
  BiRecycle,
  BiRedo,
  BiUserCircle,
  BiWallet,
} from 'react-icons/bi'
import { AccountSwitcher } from './AccountSwitcher';
import { NavGroup } from './NavGroup'
import { NavItem } from './NavItem'

export function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <>
      <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box w="64" bg="gray.900" color="white" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <AccountSwitcher />
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <Stack spacing="1">
                <NavItem active icon={<BiHome />} label="Get Started" />
                <NavItem icon={<BiCommentAdd />} label="Inbox" />
              </Stack>
              <NavGroup label="Your Business">
                <NavItem icon={<BiHome />} label="Home" href="/">
                <ChakraLink as={Link} to="/">Home</ChakraLink>
                </NavItem>
                <NavItem icon={<BiCreditCard />} label="nestedRoute" href="/nestedRoute">
                <ChakraLink as={Link} to="/nestedRoute" />
                </NavItem>
                <NavItem icon={<BiGasPump />} label="appRoute" href="/appRoute">
                <ChakraLink as={Link} to="/appRoute" />
                </NavItem>
              </NavGroup>
            </Stack>
            <Box>
              <Stack spacing="1">
                <NavItem subtle icon={<BiCog />} label="Settings" />
                <NavItem
                  subtle
                  icon={<BiBuoy />}
                  label="Help & Support"
                  endElement={<Circle size="2" bg="blue.400" />}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box bg={mode('white', 'gray.800')} flex="1" p="6">
          <Box as="main">
              {children}
            </Box>
        </Box>
      </Flex>
    </Box>
    
    </>
  );
}