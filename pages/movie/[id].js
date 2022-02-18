import { useRouter } from "next/router";

import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Container, useToast } from "@chakra-ui/react";

import Meta from "../../components/meta";
import { api } from "../../components/api";
import Header from "../../components/header";
import { showToast } from "../../components/showToast";
import { mapStateToProps } from "../../components/redux";
import MovieCastSection from "../../components/movieCastSection";
import MovieDescriptionSection from "../../components/movieDescriptionSection";

const MovieDetail = ({ movieData, creditsData, session_id, user_data }) => {
    const router = useRouter();
    const toast = useToast();
    const toastIdRef = React.useRef();
    const [isInFavoriteList, setIsInFavoriteList] = useState(null);

    const favoriteButtonHandler = async () => {
        // Cek apakah user sudah login (Menerima sessionID dari props)
        // Jika sudah, ketika button diklik akan toggle status favorite movie
        if (session_id) {
            let result = await api.post(
                `account/${user_data.id}/favorite?session_id=${session_id}`,
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
        await api.get(`/account/${user_data.id}/favorite/movies?session_id=${session_id}`)
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

    // Dijalankan 1x untuk mendapat data favoriteMovies milik user
    useEffect(() => {
        if (session_id) getUserFavoriteMovies();
    }, [])

    // Untuk menghandle state isInFavoriteList ketika user logout di halaman ini 
    useEffect(() => {
        if (!session_id) setIsInFavoriteList(null);
    })

    return (
        <>
            <Meta title={movieData.title} description={movieData.title} />
            <Header />

            <Container maxW="container.lg">

                {/*  Movie Description Section */}
                <MovieDescriptionSection
                    movieData={movieData}
                    favoriteButtonHandler={favoriteButtonHandler}
                    isInFavoriteList={isInFavoriteList} />

                {/* Movie Cast Section */}
                <MovieCastSection creditsData={creditsData} />

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