import Meta from "../../components/meta";
import Header from "../../components/header";
import { Container, Text, Box, Spacer, Flex, Image, Button, HStack, useToast } from "@chakra-ui/react";
import CastCard from "../../components/castCard";
import { api } from "../../components/api";
import { connect } from "react-redux";
import { mapStateToProps } from "../../components/redux";
import React, { useState, useEffect } from "react";
import { showToast } from "../../components/showToast";
import { useRouter } from "next/router"

const MovieDetail = ({ movieData, creditsData, session_id }) => {
    const router = useRouter();
    const toast = useToast();
    const toastIdRef = React.useRef();
    const [isInFavoriteList, setIsInFavoriteList] = useState(null);

    const favoriteButtonHandler = async () => {
        // Cek apakah user sudah login (Menerima sessionID dari props)
        // Jika sudah, ketika button diklik akan toggle status favorite movie
        if (session_id) {
            let result = await api.post(
                `account/{account_id}/favorite?session_id=${session_id}`,
                {
                    "media_type": "movie",
                    "media_id": movieData.id,
                    "favorite": !isInFavoriteList
                },
                {
                    headers: {
                        'Content-Type': "application/json;charset=utf-8"
                    }
                }
            ).then(res => res.data);

            if (result.success) {
                showToast(
                    toast,
                    toastIdRef,
                    "Success!",
                    `Film berhasil ${isInFavoriteList ? "dihapus dari" : "ditambahkan ke dalam"} list favorit`,
                    "success",
                    2000,
                    true
                );
                setIsInFavoriteList(!isInFavoriteList);
            } else {
                showToast(
                    toast,
                    toastIdRef,
                    "Error!",
                    `Gagal ${isInFavoriteList ? "menghapus film dari" : "menambahkan film ke dalam"} list favorit. Mohon coba lagi....`,
                    "error",
                    2000,
                    true
                );
            }
        }
        // Jika belum login, arahkan user menuju login page
        else {
            router.push("/login");
        }
    }

    const getUserFavoriteMovies = async () => {
        await api.get(`/account/{account_id}/favorite/movies?session_id=${session_id}`)
            .then(res => {
                const resData = res.data
                const IDs = []
                if (resData.results.length > 0) {
                    resData.results.map(el => IDs.push(el.id))
                }
                setIsInFavoriteList(IDs.includes(movieData.id))
            })
            .catch(e => {
                showToast(
                    toast,
                    toastIdRef,
                    "Error!",
                    "Kesalahan terjadi, mohon coba lagi...",
                    "error",
                    2000,
                    true
                )
            })
    }

    useEffect(() => {
        if (session_id) getUserFavoriteMovies();
    }, [])

    return (
        <>
            <Meta title={movieData.title} description={movieData.title} />
            <Header />

            <Container maxW="container.lg">

                {/*  Movie Description Section */}
                <Flex pt={36} direction={{ base: "column", md: "row" }} align={{ base: "center", md: "flex-start" }}>
                    <Image
                        alt={movieData.title}
                        src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movieData.poster_path}
                        borderRadius="md"
                    />
                    <Box ms={{ base: "0px", md: "40px", lg: "80px" }} mt={{ base: "40px", md: "0px" }}>
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

                {/* Movie Cast Section */}
                <Box my={8}>
                    <Text fontWeight="bold" fontSize="4xl">Cast</Text>
                    <HStack py="16px" px="8px" spacing="16px" width="100%" overflowX="scroll" align="stretch">
                        {creditsData.cast.map((el) => {
                            return (<CastCard
                                key={el.id}
                                posterURL={el.profile_path}
                                castName={el.name}
                                characterName={el.character}></CastCard>);
                        })}
                    </HStack>
                </Box>
            </Container>
        </>
    )
}

export async function getServerSideProps(context) {
    const movieData = await api.get(`movie/${context.query.id}`).then((res) => res.data);
    const creditsData = await api.get(`movie/${context.query.id}/credits`).then((res) => res.data);

    if (!movieData && !creditsData) {
        return {
            notFound: true,
        }
    }
    return {
        props: { movieData, creditsData }
    }
}

export default connect(mapStateToProps)(MovieDetail);