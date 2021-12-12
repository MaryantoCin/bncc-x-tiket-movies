import { Text, Image, Box } from '@chakra-ui/react'

const CastCard = (props) => {
    return (
        <Box borderRadius="lg" maxW="138px" border="1px" borderColor="gray.200" boxShadow="base">
            <Image
                src={props.posterURL}
                borderTopRadius="lg"
            />
            <Box p={2.5}>
                <Text fontSize="md" fontWeight="bold">{props.castName}</Text>
                <Text fontSize="sm" fontWeight="light">{props.characterName}</Text>
            </Box>
        </Box>
    );
}

export default CastCard;