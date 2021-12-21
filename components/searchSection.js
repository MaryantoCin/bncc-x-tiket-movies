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

import MovieCard from "./movieCard";
import { api } from "./api";
import { useEffect, useState } from "react";

const SearchSection = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("!");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .get("search/movie", { params: { query: query } })
      .then((res) => setMovies(res.data.results));
  }, [query]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = () => {
    setQuery(input || "!");
  };

  const renderSearchResults = () => {
    return movies.map((movie, idx) => {
      console.log(movie);
      return (
        <MovieCard
          key={movie.id}
          href={`movie/${movie.id}`}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
          textColor="gray.600"
        />
      );
    });
  };

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
            <Input
              type="search"
              placeholder="Search film"
              mr={1}
              onChange={handleInputChange}
            />
            <Button px={6} colorScheme="blue" onClick={handleInputSubmit}>
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
          {movies && renderSearchResults()}
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchSection;
