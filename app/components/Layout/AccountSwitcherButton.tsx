import { Box, Flex, FlexProps, HStack, Img, useMenuButton } from '@chakra-ui/react'
import * as React from 'react'
import { HiSelector } from 'react-icons/hi'

export const AccountSwitcherButton = (props: FlexProps) => {
  const buttonProps = useMenuButton(props)
  return (
    <Flex
      as="button"
      {...buttonProps}
      w="full"
      display="flex"
      alignItems="center"
      rounded="lg"
      bg="gray.700"
      px="3"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: 'gray.600' }}
      _focus={{ shadow: 'outline' }}
    >
      <HStack flex="1" spacing="3">
        <Img
          w="8"
          h="8"
          rounded="md"
          objectFit="cover"
          src="https://pbs.twimg.com/profile_images/1486842260662763526/n9JmxReU_400x400.jpg"
          alt="Ian Perez"
        />
        <Box textAlign="start">
          <Box isTruncated fontWeight="semibold">
            Ian Perez
          </Box>
          <Box fontSize="xs" color="gray.400">
            ShadowSuperCoder
          </Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <HiSelector />
      </Box>
    </Flex>
  )
}