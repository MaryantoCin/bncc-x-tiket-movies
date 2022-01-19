import Meta from "../../components/meta";
import Header from "../../components/header";
import { Container, Text, Box, Spacer, Flex, Image, Button, HStack } from "@chakra-ui/react";
import CastCard from "../../components/castCard";
import { api } from "../../components/api";


const MovieDetail = ({ data, creditsData }) => {
    return (
        <>
            <Meta title={data ? data.title : "Movie not found"} description={data ? data.title : "Movie not found"} />
            <Header />

            <Container maxW="container.lg">

                {/*  Movie Description Section */}
                <Flex pt={36} direction={{ base: "column", md: "row" }} align={{ base: "center", md: "flex-start" }}>
                    <Image
                        src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + data.poster_path}
                        borderRadius="md"
                    />
                    <Box ms={{ base: "0px", md: "40px", lg: "80px" }} mt={{ base: "40px", md: "0px" }}>
                        <Flex align="flex-end">
                            <Flex align="baseline">
                                <Text fontSize="3xl" fontWeight="bold">{data.title}</Text>
                                <Text fontSize="lg" ms={2}>{data.release_date.substring(0, 4)}</Text>
                            </Flex>

                            <Spacer />

                            <Button colorScheme="blue" size="sm">Favoritkan</Button>
                        </Flex>
                        <Text fontSize="lg" mt={9}>{data.tagline}</Text>
                        <Text fontSize="sm" mt={9}>{data.overview}</Text>
                    </Box>
                </Flex>

                {/* Movie Cast Section */}
                <Box my={8}>
                    <Text fontWeight="bold" fontSize="4xl">Cast</Text>
                    <HStack p="10px" spacing="16px" width="100%" overflowX="scroll" align="stretch">
                        {creditsData.cast.map((el) => {
                            return (<CastCard posterURL={el.profile_path} castName={el.name} characterName={el.character}></CastCard>);
                        })}
                    </HStack>
                </Box>
            </Container>
        </>
    )
}

export async function getServerSideProps(context) {
    const data = await api.get(`movie/${context.query.id}`).then((res) => res.data);

    const creditsData = await api.get(`movie/${context.query.id}/credits`).then((res) => res.data);

    if (!data && !creditsData) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data, creditsData },
    }
}

export default MovieDetail;