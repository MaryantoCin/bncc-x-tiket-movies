import {
  Container,
  Text,
  Box,
  Center,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Grid,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import Card from "./card";

const SearchSection = () => {
  return (
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
          <Card
            href="/"
            image="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
            title="Venom: Let There Be Carnage"
            textColor="gray.600"
          />
          <Card
            href="/"
            image="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
            title="Venom: Let There Be Carnage"
            textColor="gray.600"
          />
          <Card
            href="/"
            image="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
            title="Venom: Let There Be Carnage"
            textColor="gray.600"
          />
          <Card
            href="/"
            image="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
            title="Venom: Let There Be Carnage"
            textColor="gray.600"
          />
          <Card
            href="/"
            image="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
            title="Venom: Let There Be Carnage"
            textColor="gray.600"
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchSection;
