import { Center, Button } from "@chakra-ui/react";

export default function Index() {
  return (
    <div className="max-w-md mx-auto bg-sonrBlue rounded-xl shadow-md overflow-hidden md:max-w-7xl md:max-h-full">
      <div className="md:flex flex-col">
        <div className="p-8">
          <div className="uppercase tracking-wide text-3xl text-center text-snowWhite font-semibold">SONR Highway SDK</div>
            <a href="#" className="block mt-1 text-lg text-center leading-tight font-medium text-snowWhite hover:text-sonrSecondary">SONR Documentation</a>
            <p className="mt-2 text-center text-snowWhite">We built the batteries attached Blockahin, Network, and Wallet.</p>
            <Center>
            <Button className="mt-4 text-center text-sonrSecondary" colorScheme='gray' size='md'> Get Started </Button>
            </Center>
          </div>
      </div>
    </div>
  );
}
