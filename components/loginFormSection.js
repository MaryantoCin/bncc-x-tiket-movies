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
Component: FormInput
Receives: text (the column/input name) and type (the input type)
This component will show one form column, which includes one label and an input box.
*/
function InputForm(props) {
  return (
    <Flex flexDirection='column' marginBottom='8px'>
      <FormControl id={props.text.lowercase} color="black">
        <FormLabel marginBottom='4px' color='#4A5568' fontSize='1rem'>{props.text}</FormLabel>
        <Input type={props.type} />
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
function LoginForm() {

  const toast = useToast();
  const toastIdRef = React.useRef();

  function closeToast() {
    console.log("Test");
    toast.close(toastIdRef.current);
  }

  function showToast(title, description, status) {
    toastIdRef.current = toast({
      title: title,
      description: description,
      status: status,
      duration: 3000,
      isClosable: true,
      render: () => (
        <Box position="relative" padding='12px 36px 12px 48px' color='gray.700' bg='red.100' lineheight="16px" borderRadius='6px'>
          <WarningIcon position="absolute" top="16px" left="16px" color="red.500"/>
          <CloseButton position="absolute" top="12px" right="12px" size='sm' onClick={() => closeToast()}/>
          <Text fontWeight='bold'>{ title }</Text>
          <Text>{ description }</Text>
        </Box>
      ),
    })
  }

  function authenticate() {
    showToast('Login gagal', 'Username atau password salah', 'error');
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

export default function LoginFormSection() {
  return (
    <Flex flex='1' w='100%' h='100vh' justifyContent='center'>
      <LoginForm />
    </Flex>
  );
}
