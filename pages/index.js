import {
  Container,
  Text,
  Box,
  Spacer,
  Center,
  InputGroup,
  InputLeftElement,
  Input,
  Image,
  Button,
  Grid,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BNCC Movies</title>
        <meta name="description" content="BNCC Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box position="fixed" as="nav" w="100%" zIndex={1} bg="white" py={2}>
        <Container
          display="flex"
          p={2}
          maxW="container.xl"
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
      <Box bg="blue.600" py="32px" pt="80px">
        <Container maxW="container.xl">
          <Text fontSize={[28, 36]} color="white" fontWeight="bold">
            Populer sekarang
          </Text>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
              "repeat(5, 1fr)",
            ]}
            gap={[10, 10, 10, 10, 20]}
            mt={5}
          >
            <Link href="/" passHref>
              <Box w="100%" h="300px" cursor="pointer">
                <Image
                  width="100%"
                  height="80%"
                  objectFit="cover"
                  src="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
                  borderRadius={8}
                  alt="movie"
                ></Image>
                <Text
                  fontSize={[14, 16]}
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                  pt={2}
                >
                  Venom: Let There Be Carnage
                </Text>
              </Box>
            </Link>
            <Box w="100%" h="300px">
              <Image
                width="100%"
                height="80%"
                objectFit="cover"
                src="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
                borderRadius={8}
                alt="movie"
              ></Image>
              <Text
                fontSize={[14, 16]}
                color="white"
                fontWeight="bold"
                textAlign="center"
                pt={2}
              >
                Venom: Let There Be Carnage
              </Text>
            </Box>
            <Link href="/" passHref>
              <Box w="100%" h="300px" cursor="pointer">
                <Image
                  width="100%"
                  height="80%"
                  objectFit="cover"
                  src="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
                  borderRadius={8}
                  alt="movie"
                ></Image>
                <Text
                  fontSize={[14, 16]}
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                  pt={2}
                >
                  Venom: Let There Be Carnage
                </Text>
              </Box>
            </Link>
            <Link href="/" passHref>
              <Box w="100%" h="300px" cursor="pointer">
                <Image
                  width="100%"
                  height="80%"
                  objectFit="cover"
                  src="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
                  borderRadius={8}
                  alt="movie"
                ></Image>
                <Text
                  fontSize={[14, 16]}
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                  pt={2}
                >
                  Venom: Let There Be Carnage
                </Text>
              </Box>
            </Link>
            <Link href="/" passHref>
              <Box w="100%" h="300px" cursor="pointer">
                <Image
                  width="100%"
                  height="80%"
                  objectFit="cover"
                  src="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
                  borderRadius={8}
                  alt="movie"
                ></Image>
                <Text
                  fontSize={[14, 16]}
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                  pt={2}
                >
                  Venom: Let There Be Carnage
                </Text>
              </Box>
            </Link>
          </Grid>
        </Container>
      </Box>
      <Box py="32px" pb="64px">
        <Container maxW="container.xl">
          <Center display="flex" flexDir="column" alignItems="center">
            <Text fontSize={[28, 36]} color="gray.600" fontWeight="bold">
              Cari film
            </Text>
            <InputGroup w={["100%", "80%", "60%", "40%"]} m={3}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input type="search" placeholder="Search film" mr={1} />
              <Button px={6} colorScheme="blue">
                Cari
              </Button>
            </InputGroup>
          </Center>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
              "repeat(5, 1fr)",
            ]}
            gap={[10, 10, 10, 10, 20]}
            mt={5}
          >
            <Link href="/" passHref>
              <Box w="100%" h="300px" cursor="pointer">
                <Image
                  width="100%"
                  height="80%"
                  objectFit="cover"
                  src="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
                  borderRadius={8}
                  alt="movie"
                ></Image>
                <Text
                  fontSize={[14, 16]}
                  color="gray.600"
                  fontWeight="bold"
                  textAlign="center"
                  pt={2}
                >
                  Venom: Let There Be Carnage
                </Text>
              </Box>
            </Link>
            <Link href="/" passHref>
              <Box w="100%" h="300px" cursor="pointer">
                <Image
                  width="100%"
                  height="80%"
                  objectFit="cover"
                  src="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
                  borderRadius={8}
                  alt="movie"
                ></Image>
                <Text
                  fontSize={[14, 16]}
                  color="gray.600"
                  fontWeight="bold"
                  textAlign="center"
                  pt={2}
                >
                  Venom: Let There Be Carnage
                </Text>
              </Box>
            </Link>
            <Link href="/" passHref>
              <Box w="100%" h="300px" cursor="pointer">
                <Image
                  width="100%"
                  height="80%"
                  objectFit="cover"
                  src="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
                  borderRadius={8}
                  alt="movie"
                ></Image>
                <Text
                  fontSize={[14, 16]}
                  color="gray.600"
                  fontWeight="bold"
                  textAlign="center"
                  pt={2}
                >
                  Venom: Let There Be Carnage
                </Text>
              </Box>
            </Link>
            <Link href="/" passHref>
              <Box w="100%" h="300px" cursor="pointer">
                <Image
                  width="100%"
                  height="80%"
                  objectFit="cover"
                  src="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
                  borderRadius={8}
                  alt="movie"
                ></Image>
                <Text
                  fontSize={[14, 16]}
                  color="gray.600"
                  fontWeight="bold"
                  textAlign="center"
                  pt={2}
                >
                  Venom: Let There Be Carnage
                </Text>
              </Box>
            </Link>
            <Link href="/" passHref>
              <Box w="100%" h="300px" cursor="pointer">
                <Image
                  width="100%"
                  height="80%"
                  objectFit="cover"
                  src="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
                  borderRadius={8}
                  alt="movie"
                ></Image>
                <Text
                  fontSize={[14, 16]}
                  color="gray.600"
                  fontWeight="bold"
                  textAlign="center"
                  pt={2}
                >
                  Venom: Let There Be Carnage
                </Text>
              </Box>
            </Link>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
