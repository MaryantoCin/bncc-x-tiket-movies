import React, { useEffect, useState } from 'react'
import { api } from "./api"
import { showToast } from "./showToast.js"
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  CloseButton,
  useToast,
  propNames
} from '@chakra-ui/react'

/*
Component: FormInput
Receives: text (the column/input name) and type (the input type)
This component will show one form column, which includes one label and an input box.
*/
const InputForm = ({text, type}) => {
  return (
    <Flex flexDirection='column' marginBottom='8px'>
      <FormControl color="black">
        <FormLabel htmlFor={text.toLowerCase()} marginBottom='4px' color='#4A5568' fontSize='1rem'>{text}</FormLabel>
        <Input type={type} id={text.toLowerCase()}/>
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

  const [currentUser, setUser] = useState('null');
  const [currentToken, setToken] = useState(null);
  const [currentSession, setSession] = useState(null);
  const toast = useToast();
  const toastIdRef = React.useRef();

  function authenticate(e) {
    e.preventDefault();

    // Read username and password from input boxes
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Step 1: Get new token.
    api.get('/authentication/token/new').then(data => {

      // Step 2: Validate Token with Username and Password.
      api.post('/authentication/token/validate_with_login', {
        username: username,
        password: password,
        request_token: data.data.request_token
        
      }).then((res) => {

        // Step 3: If successful, create new session.
        if(res.data.success === true) {
          setToken(data.data.request_token);
          api.post('/authentication/session/new', {
            request_token: data.data.request_token
          }).then((status) => {

            // Step 4: If successful, user is now logged in.
            if(status.data.success === true) {
              showToast(toast, toastIdRef, 'Login berhasil!', 'Selamat datang!', 'success', 2000, true);
              setSession(status.data.session_id);
              console.log("LOGIN TOKEN: " + status.data.session_id);
            }
          }).catch(e => {

          });
        }
      }).catch(e => {
        showToast(toast, toastIdRef, 'Login gagal!', 'Username atau password salah.', 'error', 2000, true);
      });
    }).catch(e => {
      
    });
  }

  function logout(e) {
    e.preventDefault();
    if(currentToken === null)
      return;
    api.delete('/authentication/session', {
      params: {
        session_id: currentSession
      }
      
    }).then((res) => {
      console.log("Logout")
      console.log(res);
      setToken(null);
      setSession(null);
    }).catch(e => {

    });
  }
  
  useEffect(() => {
    if(currentSession !== null) {
      console.log("TRYING USEEFFECT");
      console.log(currentSession);
      api.get('/account', {
        params: {
          session_id: currentSession
        }
      }).then((res) => {
        setUser(res.data.name);
        console.log("CURRENT TOKEN");
        console.log(res);
      }).catch(e => {

      });
    }
  });

  return (
    <>
      <form style={{height: '100' + '%'}}>
        <Flex w={{base: '50vw', lg: '25vw'}} h='100%' flexDirection='column' justifyContent='center'>
          <Text color="black">
            currentUser: {currentUser}<br />
            currentToken: {currentToken}
          </Text>
          <InputForm text="Username" type="text"/>
          <InputForm text="Password" type="password"/>
          <Button
            colorScheme='blue'
            marginTop='8px'
            onClick={authenticate}
          >
            Login
          </Button>
          <Button
            colorScheme='blue'
            marginTop='8px'
            onClick={logout}
          >
            Logout
          </Button>
        </Flex>
      </form>
    </>
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