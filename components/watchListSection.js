import { Container, Text, Box, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "./api";
import MovieCard from "./movieCard";

const WatchListSection = ({ session_id, user_data }) => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    api
      .get(
        `/account/${user_data.username}/favorite/movies?session_id=${session_id}`
      )
      .then((res) => setWatchList(res.data.results));
  }, []);

  const renderWatchList = () => {
    return watchList.map((movie, idx) => {
      return (
        <MovieCard
          key={movie.id}
          href={`movie/${movie.id}`}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
          textColor="black"
        />
      );
    });
  };

  return (
    <Box bg="white" py="32px" pt="80px">
      <Container maxW="container.xl">
        <Text fontSize={[28, 36]} color="black" fontWeight="bold">
          My Favorite Movies
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
          {watchList && renderWatchList()}
        </Grid>
      </Container>
    </Box>
  );
};

export default WatchListSection;
