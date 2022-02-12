import { Box, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface FeatureProps {
  title: string
  children: React.ReactNode
  icon: React.ReactElement
}

export const Feature = (props: FeatureProps) => {
  const { title, children, icon } = props
  return (
    <Box
      as="section"
      bg={mode('white', 'gray.800')}
      px={{ base: '6', md: '8' }}
      py={{ base: '6', md: '8' }}
      rounded="lg"
      shadow="md"
      mb="8"
    >
    <Stack spacing={{ base: '3', md: '6' }} direction={{ base: 'column', md: 'row' }}>
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={mode('gray.600', 'gray.400')}>{children}</Box>
      </Stack>
    </Stack>
    </Box>
  )
}