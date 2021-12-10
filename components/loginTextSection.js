import {
  Box,
  Text,
  Center,
} from '@chakra-ui/react'
import Link from 'next/link'

/*
Component: LoginTitle
This component will show the text "Login ke akun BNCC x tiket Movies" on the left part of the login view.
*/
function LoginTitle() {
  return (
    <Box fontSize='1.6rem' lineHeight='2.4rem' alignSelf='center'>
      <Text>
        Login ke akun
      </Text>
      <Text fontWeight='bold'>
        BNCC &times; tiket Movies
      </Text>
    </Box>
  );
}

/*
Component: FAIcon
Receives: icon name
This component will display a FontAwesome icon with the corresponding icon name.
*/
function FAIcon(props) {
  return (
    <i class={"fa fa-" + props.name}></i>
  );
}

/*
Component: LinkElement
Receives: link and element
This component will display an element, that when clicked will open the given link.
*/
function LinkElement(props) {
  return (
    <Link href={props.link}>
      <a title={props.title}>
        {props.element}
      </a>
    </Link>
  );
}

export default function LoginTextSection() {
  return (
    <Center flex='1' w='100%' h='100vh' bg='blue.600'>
      <LinkElement 
        link="/"
        title="Kembali ke beranda"
        element={(
          <Text position="absolute" top="64px" left="64px" fontSize="1rem">
          <FAIcon name="angle-left"/> Kembali ke beranda
          </Text>
        )}/>
      <LoginTitle />
    </Center>
  );
}
