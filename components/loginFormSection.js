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

import { mapStateToProps, setSessionId, removeSessionId, mapDispatchToProps } from '../components/redux'
import { connect } from 'react-redux'
import Router from 'next/router'

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

const LoginForm = (props) => {
  const [currentUser, setUser] = useState('null');
  const [currentToken, setToken] = useState(null);
  const [currentSession, setSession] = useState(null);
  const toast = useToast();
  const toastIdRef = React.useRef();

  function apiGetUserData(session_id) {
    // .. request for user data.
    api.get('/account', {
      params: {
        session_id: session_id
      }
    }).then(res => {
      // Step 5: If successful, save the data, and login.
      if(res.status === 200) {
        props.setSessionId(session_id, res.data);
        showToast(toast, toastIdRef, 'Login berhasil!', 'Selamat datang!', 'success', 2000, true);
        Router.push('/');
      }
    }).catch(e => {
    });
  }

  function apiNewSession(request_token) {
    // ...create new session.
    setToken(request_token);
    api.post('/authentication/session/new', {
      request_token: request_token
    }).then((status) => {

      // Step 4: If successful...
      if(status.data.success === true) {
        apiGetUserData(status.data.session_id);
      }
    }).catch(e => {
    });
  }

  function apiValidateToken(username, password, data) {
    // Step 2: Validate Token with Username and Password.
    api.post('/authentication/token/validate_with_login', {
      username: username,
      password: password,
      request_token: data.data.request_token
    }).then((res) => {
      // Step 3: If successful...
      if(res.data.success === true) {
        apiNewSession(data.data.request_token);
      }
    }).catch(e => {
      showToast(toast, toastIdRef, 'Login gagal!', 'Username atau password salah.', 'error', 2000, true);
    });
  }

  function authenticate(e) {
    e.preventDefault();

    // Read username and password from input boxes
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Step 1: Get new token.
    api.get('/authentication/token/new').then(data => {
      apiValidateToken(username, password, data);
    }).catch(e => {
      
    });
  }
  
  useEffect(() => {
    if(currentSession !== null) {
      api.get('/account', {
        params: {
          session_id: currentSession
        }
      }).then((res) => {
        setUser(res.data.name);
      }).catch(e => {

      });
    }
  });

  return (
    <Flex flex='1' w='100%' h='100vh' justifyContent='center'>
      <form style={{height: '100' + '%'}}>
        <Flex w={{base: '50vw', lg: '25vw'}} h='100%' flexDirection='column' justifyContent='center'>
          <InputForm text="Username" type="text" isDisabled={(props.session_id === null) ? false : true}/>
          <InputForm text="Password" type="password" isDisabled={(props.session_id === null) ? false : true}/>
          <Button
            colorScheme='blue'
            marginTop='8px'
            onClick={authenticate}
			      isDisabled={(props.session_id === null) ? false : true}
          >
            Login
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);