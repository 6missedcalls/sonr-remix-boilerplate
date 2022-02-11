import { Box, Text, SimpleGrid, Center, LightMode, Heading, Button } from '@chakra-ui/react'
export const Hero = () => {
return(
    <Box
        as="section"
        bg="gray.800"
        py="12"
        position="relative"
        h={{ base: '560px', md: '640px' }}
        // create a gradient
        backgroundImage="linear-gradient(to bottom, #369FFF, #369FFF, 50%, #0061FF 100%)"
        bgSize="cover"
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
            <Text fontSize="lg" fontWeight="medium" mt="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
            </Text>
            <LightMode>
              <Button colorScheme="blue" size="lg" mt="6" fontWeight="bold" fontSize="md">
                Register your .SNR
              </Button>
            </LightMode>
          </Center>
        </Box>
        <Box
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          zIndex={2}
          w="full"
          bottom="0"
          py="4"
          bg="blackAlpha.400"
        >
          <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto">
            <SimpleGrid columns={{ base: 1, md: 3 }}>
              <Box textAlign="center" color="white">
                <Text>.SNR Names Registered</Text>
                <Text animation="from:0, to:100" fontSize="3xl"> 0 </Text>
              </Box>
              <Box textAlign="center" color="white">
                <Text>Transactions</Text>
                <Text fontSize="3xl"> 0 </Text>
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