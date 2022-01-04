import {
  Box,
  Text,
  Center,
} from '@chakra-ui/react'
import Link from 'next/link'
import { ChevronLeftIcon } from '@chakra-ui/icons'

/*
Component: LoginTitle
This component will show the text "Login ke akun BNCC x tiket Movies" on the left part of the login view.
*/
const LoginTitle = () => {
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
Component: LinkElement
Receives: link and element
This component will display an element, that when clicked will open the given link.
*/
const LinkElement = ({link, title, element}) => {
  return (
    <Link href={link}>
      <a title={title}>
        {element}
      </a>
    </Link>
  );
}

const LoginTextSection = () => {
  return (
    <Center flex='1' w='100%' h='100vh' bg='blue.600'>
      <LinkElement 
        link="/"
        title="Kembali ke beranda"
        element={(
          <Text position="absolute" top="64px" left="64px" fontSize="1rem">
          <ChevronLeftIcon /> Kembali ke beranda
          </Text>
        )}/>
      <LoginTitle />
    </Center>
  );
}

export default LoginTextSection;