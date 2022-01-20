import { Text, Image, Box } from '@chakra-ui/react'

const CastCard = (props) => {
    return (
        <Box borderRadius="lg" minW="140px" border="1px" borderColor="gray.200" boxShadow="base">
            <Image
                src={props.posterURL === null ? '/blankavatar.png' : "https://image.tmdb.org/t/p/w138_and_h175_face" + props.posterURL}
                borderTopRadius="lg"
                height="175px"
                objectFit="contain"
                bgColor="#e4e6e7"
                alt={props.castName}
            />
            <Box p={2.5}>
                <Text fontSize="md" fontWeight="bold">{props.castName}</Text>
                <Text fontSize="sm" fontWeight="light">{props.characterName}</Text>
            </Box>
        </Box>
    );
}

export default CastCard;