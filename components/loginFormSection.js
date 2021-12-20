import React from 'react'
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  CloseButton,
  useToast
} from '@chakra-ui/react'

import { WarningIcon } from '@chakra-ui/icons'

/*
Reusable and Exportable Function: showToast and closeToast.
*/
export function showToast(toast, toastIdRef, {title, description, status, duration, isClosable}) {
  toast.close(toastIdRef.current);
  toastIdRef.current = toast({
    title: title,
    description: description,
    status: status,
    duration: duration,
    isClosable: isClosable,
    render: () => (
      <Box position="relative" padding='12px 36px 12px 48px' color='gray.700' bg='red.100' lineheight="16px" borderRadius='6px'>
        <WarningIcon position="absolute" top="16px" left="16px" color="red.500"/>
        <CloseButton position="absolute" top="12px" right="12px" size='sm' onClick={() => closeToast(toast, toastIdRef)}/>
        <Text fontWeight='bold'>{ title }</Text>
        <Text>{ description }</Text>
      </Box>
    ),
  })
}

export function closeToast(toast, toastIdRef) {
  toast.close(toastIdRef.current);
}

/*
Component: FormInput
Receives: text (the column/input name) and type (the input type)
This component will show one form column, which includes one label and an input box.
*/
const InputForm = ({text, type}) => {
  return (
    <Flex flexDirection='column' marginBottom='8px'>
      <FormControl id={text.lowercase} color="black">
        <FormLabel marginBottom='4px' color='#4A5568' fontSize='1rem'>{text}</FormLabel>
        <Input type={type} />
      </FormControl>
    </Flex>
  );
}

/*
Component: Login
This component will show the login form, which includes:
- Username Input Form
- Password Input Form
- Login Button
*/
const LoginForm = () => {
  const toast = useToast();
  const toastIdRef = React.useRef();

  function authenticate() {
    showToast(toast, toastIdRef, {title:'Login gagal', description:'Username atau password salah', status:'error', duration:3000, isClosable:true});
  }

  return (
    <form style={{height: '100' + '%'}}>
      <Flex w={{base: '50vw', lg: '25vw'}} h='100%' flexDirection='column' justifyContent='center'>
        <InputForm text="Username" type="text"/>
        <InputForm text="Password" type="password"/>
        <Button
          colorScheme='blue'
          marginTop='8px'
          onClick={() => authenticate()}
        >
          Login
        </Button>
      </Flex>
    </form>
  );
}

const LoginFormSection = () => {
  return (
    <Flex flex='1' w='100%' h='100vh' justifyContent='center'>
      <LoginForm />
    </Flex>
  );
}

export default LoginFormSection;