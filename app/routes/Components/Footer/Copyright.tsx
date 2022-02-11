import { Text, TextProps, Center } from '@chakra-ui/react'

export const Copyright = (props: TextProps) => (
  <Center>
    <Text fontSize="sm" {...props}>
      &copy; {new Date().getFullYear()} Sonr.io All rights reserved.
    </Text>
  </Center>
)