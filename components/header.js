import { Container, Text, Box, Spacer, Button, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { connect } from 'react-redux'
import React from 'react'

import { mapStateToProps, mapDispatchToProps } from '../components/redux'
import { api } from "./api"
import { showToast } from "./showToast.js"


export const Account = (props) => {
  const toast = useToast();
  const toastIdRef = React.useRef();

  function logout(e) {
    e.preventDefault();
    if(props.session_id === null || props.session_id === undefined)
      return;
    api.delete('/authentication/session', {
      params: {
        session_id: props.session_id
      }
    }).then((res) => {
      props.removeSessionId();

      showToast(toast, toastIdRef, 'Logout berhasil!', 'Sampai jumpa!', 'success', 2000, true);
    }).catch(e => {

    });
  }

  if(props.session_id === null || props.session_id === undefined)
    return (
      <Link href="/login" passHref>
        <Text
          fontSize={[12, 14]}
          color="gray.700"
          fontWeight="bold"
          cursor="pointer"
          m={0}
          p={0}
        >
          Login
        </Text>
      </Link>
    );

  return (
    <Button variant='link' fontSize={[12, 14]}
    color="gray.700"
    fontWeight="bold"
    cursor="pointer"
    m={0}
    p={0}
    _hover={{
      textDecoration:'none'
    }}
    onClick={logout}>
      Logout
    </Button>
  )
}

const Header = (props) => {
  return (
    <Box position="fixed" as="nav" w="100%" zIndex={1} bg="white" py={2}>
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        alignItems="center"
        justify="space-between"
      >
        <Link href="/" passHref>
          <Text
            fontSize={[16, 20]}
            color="blue.600"
            fontWeight="bold"
            cursor="pointer"
            m={0}
            p={0}
          >
            BNCC x tiket Movies
          </Text>
        </Link>
        <Spacer />
        <Account session_id={props.session_id} removeSessionId={props.removeSessionId}/>
      </Container>
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps) (Header);