import { Box, Button, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc'


export const CTA = () => {
  return (
    <Box
    as="section"
    bg="gray.800"
    py="12"
    position="relative"
    h={{ base: '560px', md: '640px' }}
    backgroundImage="linear-gradient(to bottom, #369FFF, #369FFF, 50%, #0061FF 100%)"
    bgSize="cover"
    bgPosition="center"
    _after={{
      content: `""`,
      display: 'block',
      w: 'full',
      h: 'full',
      bg: 'white.700',
      position: 'absolute',
      inset: 0,
      zIndex: 1,
    }}
    >
      <Box
        maxW="3xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading
          my="4"
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
        >
          Get your Sonr Registry Name{' '}
          <Box
            as="mark"
            bg="unset"
            color="#F6F6F6"
            whiteSpace="nowrap"
          >
            .SNR
          </Box>
        </Heading>
        <Text fontSize="lg" maxW="xl" mx="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        </Text>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          mt="10"
          justify="center"
          spacing={{ base: '2', md: '4' }}
          maxW="md"
          mx="auto"
        >
          <Button
              as="a"
              href="#"
              size="lg"
              colorScheme="blue"
              px="8"
              fontWeight="bold"
              zIndex={2}
            >
            Go to App
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}