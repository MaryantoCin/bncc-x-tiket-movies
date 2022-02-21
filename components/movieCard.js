import { Text, Box, Image } from "@chakra-ui/react";
import Link from "next/link";

const MovieCard = ({ href = "/", image, title, textColor }) => {
  return (
    <Link href={href} passHref>
      <Box w="100%" h="300px" cursor="pointer">
        <Image
          width="100%"
          height="80%"
          objectFit="cover"
          src={image}
          borderRadius={8}
          alt={title}
		  fallbackSrc="/blankmovie.png"
        ></Image>
        <Text
          fontSize={[14, 16]}
          color={textColor}
          fontWeight="bold"
          textAlign="center"
          pt={2}
        >
          {title}
        </Text>
      </Box>
    </Link>
  );
};

export default MovieCard;
