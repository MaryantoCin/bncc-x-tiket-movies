import { Container, Text, Box, Grid } from "@chakra-ui/react";
import Card from "./card";

const PopularSection = () => {
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
          <Card
            href="/"
            image="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
            title="Venom: Let There Be Carnage"
            textColor="white"
          />
          <Card
            href="/"
            image="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
            title="Venom: Let There Be Carnage"
            textColor="white"
          />
          <Card
            href="/"
            image="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
            title="Venom: Let There Be Carnage"
            textColor="white"
          />
          <Card
            href="/"
            image="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
            title="Venom: Let There Be Carnage"
            textColor="white"
          />
          <Card
            href="/"
            image="https://www.themoviedb.org/t/p/original/aLBiGL6Nqx8nY27X61g6szKn19Y.jpg"
            title="Venom: Let There Be Carnage"
            textColor="white"
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularSection;
