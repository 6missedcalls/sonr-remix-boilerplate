import { Box, Button, Center, Heading, LightMode, SimpleGrid, Text, Container, Grid, GridItem, } from '@chakra-ui/react'
import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc'
import { Hero } from './components/Hero/hero'
import { CTA } from "./Components/CTA/cta";
import { Feature } from "./Components/Features/Features";
import { Footer } from './Components/Footer/Footer';

export default function Index() {
  return (
  <>
    <Hero />
      <CTA />
      <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={[1, 1, 2]} spacing={8}>
          <GridItem>
            <Feature
              icon={<FcDoughnutChart />}
              title="Analytics"
            > Test </Feature>
          </GridItem>
          <GridItem>
          <Feature title="Secure by default" icon={<FcPrivacy />}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus.
          </Feature>
          <Feature title="Always up to date" icon={<FcTimeline />}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore.
          </Feature>
          <Feature title="Incredible statistics" icon={<FcDoughnutChart />}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus.
          </Feature>
          <Feature title="Support for multiple devices" icon={<FcMultipleDevices />}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore.
          </Feature>
          </GridItem>
          </SimpleGrid>
      </Box>
    <Footer />
    </>
  );
}
