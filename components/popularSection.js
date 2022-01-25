import { Container, Text, Box, Grid } from "@chakra-ui/react";
import MovieCard from "./movieCard";

const PopularSection = ({ popularMoviesData }) => {
  return (
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
          {popularMoviesData &&
            popularMoviesData.map((movie, idx) => {
              return (
                <MovieCard
                  key={movie.id}
                  href={`movie/${movie.id}`}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  title={movie.title}
                  textColor="white"
                />
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularSection;
