import { Flex, Image, Box, Text, Spacer, Button } from "@chakra-ui/react";

const MovieDescriptionSection = ({ movieData, favoriteButtonHandler, isInFavoriteList }) => {
    return (
        <Flex
            pt={36}
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-start" }}
        >
            <Image
                alt={movieData.title}
                src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movieData.poster_path}
                borderRadius="md"
            />
            <Box
                ms={{ base: "0px", md: "40px", lg: "80px" }}
                mt={{ base: "40px", md: "0px" }}
            >
                <Flex align="center" justify='space-between'>
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        maxW={{ base: "60%", sm: "80%" }}
                    >
                        {movieData.title}
                        <Text
                            as='span'
                            fontSize="lg"
                            fontWeight='normal'
                            ms={2}
                        >{movieData.release_date.substring(0, 4)}</Text>
                    </Text>

                    <Spacer />

                    <Button colorScheme="blue" size="sm" onClick={favoriteButtonHandler}>
                        {isInFavoriteList ? "Hapus dari favorit" : "Favoritkan"}
                    </Button>
                </Flex>
                <Text fontSize="lg" mt={9}>{movieData.tagline}</Text>
                <Text fontSize="sm" mt={9}>{movieData.overview}</Text>
            </Box>
        </Flex>
    )
}

export default MovieDescriptionSection;