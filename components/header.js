import { Container, Text, Box, Spacer } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Box position="fixed" as="nav" w="100%" zIndex={1} bg="white">
      <Container
        display="flex"
        py={6}
        maxW="container.lg"
        alignItems="center"
        justify="space-between"
      >
        <Link href="/" passHref>
          <Text
            fontSize={[16, 20]}
            color="blue.600"
            fontWeight="bold"
            cursor="pointer"
            m={0}
            p={0}
          >
            BNCC x tiket Movies
          </Text>
        </Link>
        <Spacer />
        <Link href="/login" passHref>
          <Text
            fontSize={[12, 14]}
            color="gray.700"
            fontWeight="bold"
            cursor="pointer"
            m={0}
            p={0}
          >
            Login
          </Text>
        </Link>
      </Container>
    </Box>
  );
};

export default Header;
