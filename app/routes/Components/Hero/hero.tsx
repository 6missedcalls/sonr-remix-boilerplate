import { Box, Text, SimpleGrid, Center, DarkMode, Heading, Button } from '@chakra-ui/react'
export const Hero = () => {
return(
    <Box
        as="section"
        py="12"
        position="relative"
        h={{ base: '560px', md: '640px' }}
        backgroundImage="linear-gradient(to bottom, #369FFF, #369FFF, 50%, #0061FF 100%)"
        bgSize="fill"
        bgPosition="center"
        _after={{
          content: `""`,
          display: 'block',
          w: 'full',
          h: 'full',
          bg: 'blackAlpha.700',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Box
          maxW={{ base: 'xl', md: '7xl' }}
          mx="auto"
          px={{ base: '6', md: '8' }}
          h="full"
          zIndex={1}
          position="relative"
        >
          <Center flexDirection="column" textAlign="center" color="white" h="full">
            <Heading size="2xl" fontWeight="extrabold">
              Sonr.io 
            </Heading>
            <Text fontSize="lg" fontWeight="medium" mt="3" p={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
            </Text>
            <DarkMode>
              <Button
                  as="a"
                  href="#"
                  size="lg"
                  colorScheme="blue"
                  px="8"
                  fontWeight="bold"
                  fontSize="md"
                >
                Register .SNR Name
              </Button>
            </DarkMode>
          </Center>
        </Box>
        <Box
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          zIndex={2}
          w="full"
          bottom="0"
          py="4"
          bg="white.400"
        >
          <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto">
            <SimpleGrid columns={{ base: 1, md: 3 }}>
              <Box textAlign="center" color="white">
                <Text>.SNR Names Registered</Text>
                <Text fontSize="3xl"> 111 </Text>
              </Box>
              <Box textAlign="center" color="white">
                <Text>Transactions</Text>
                <Text fontSize="3xl"> 444,444,444 </Text>
              </Box>
              <Box textAlign="center" color="white">
                <Text>Most Recent Registry</Text>
                <Text fontSize="3xl">shadowysupercoder.snr</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
)
}