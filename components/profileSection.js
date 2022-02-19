import {
  Avatar,
  Container,
  Flex,
  Center,
  Divider,
  Text,
  Box,
  Wrap,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  CircularProgress,
  CircularProgressLabel
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "./api";

const ProfileSection = () => {
  return (
    <Box bg="blue.600" pt="110px" pb="50px">
      <Container maxW="container.xl">
        <Wrap>
          <WrapItem>
            <Avatar
              size="2xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />{" "}
          </WrapItem>
            <Flex direction={'column'}>
              <Flex>
                <Text fontSize={[28, 36]} h='60px' color="white" fontWeight="bold" p='0 10px 0 20px'>
                  Dave
                </Text>
                <Text fontSize={[12, 20]} color="white" as="i" pt='5' opacity='.7'>
                  Member since June 2018
                </Text>
              </Flex>
              <Flex >
                <StatGroup>
                  <Stat pl='20px'>
                    <StatLabel color="white" fontSize={[12, 18]}>Your Activity</StatLabel>
                    <Flex>
                      <StatNumber color="white">100</StatNumber>
                      <Text fontSize={[12, 18]} color="white" pt='5px' pl='8px'>Movie</Text>
                    </Flex>
                    <StatHelpText>
                      <Flex >
                        <StatArrow type="increase" />
                        <Text color ="white" opacity='.8'>
                          23.36%
                        </Text>
                      </Flex>
                        <Text color ="white" opacity='.6'>
                          than last week
                        </Text>
                    </StatHelpText>
                  </Stat>
                  <Center pt='20px' height='50px'>
                    <Divider orientation='vertical' />
                  </Center>
                  <Stat p='0 0 0 40px'>
                    <StatLabel color="white" fontSize={[12, 18]}>Average Movie Rating</StatLabel>
                    <CircularProgress value={40} color='green.400'>
                      <CircularProgressLabel color='white'>80%</CircularProgressLabel>
                    </CircularProgress>
                  </Stat>
                </StatGroup>
              </Flex>
            </Flex>
        </Wrap>
      </Container>
    </Box>
  );
};

export default ProfileSection;
