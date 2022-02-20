import {
  Avatar,
  Container,
  Flex,
  Text,
  Box,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const ProfileSection = ({ user_data }) => {
  return (
    <Box bg="blue.600" pt="110px" pb="50px">
      <Container maxW="container.xl">
        <Wrap>
          <WrapItem>
            <Avatar
              size="2xl"
              name={user_data.username}
              src={`https://secure.gravatar.com/avatar/${user_data.avatar.gravatar.hash}?s=512`}
            />{" "}
          </WrapItem>
          <Flex direction={"column"}>
            <Flex>
              <Text
                fontSize={[28, 36]}
                h="60px"
                color="white"
                fontWeight="bold"
                p="0 10px 0 20px"
              >
                {user_data.username}
              </Text>
            </Flex>
          </Flex>
        </Wrap>
      </Container>
    </Box>
  );
};

export default ProfileSection;
