import CastCard from "./castCard";
import { Box, Text, HStack } from "@chakra-ui/react";

const MovieCastSection = ({ creditsData }) => {
    return (
        <Box my={8}>
            <Text fontWeight="bold" fontSize="4xl">Cast</Text>
            <HStack
                py="16px"
                px="8px"
                spacing="16px"
                width="100%"
                overflowX="scroll"
                align="stretch"
            >
                {creditsData.cast.map((el) => {
                    return (<CastCard
                        key={el.id}
                        posterURL={el.profile_path}
                        castName={el.name}
                        characterName={el.character}></CastCard>);
                })}
            </HStack>
        </Box>
    )
}

export default MovieCastSection;