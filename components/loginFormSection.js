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
      console.log(res);
      if(res.status === 200) {
        props.setSessionId(session_id, res.data);
        showToast(toast, toastIdRef, 'Login berhasil!', 'Selamat datang!', 'success', 2000, true);
        Router.push('/');
      }
    }).catch(e => {
      console.log(e);
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
        console.log("Get Data: " + status.data.session_id);
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

  function logout(e) {
    e.preventDefault();
    if(props.session_id === null)
      return;
    api.delete('/authentication/session', {
      params: {
        session_id: props.session_id
      }
    }).then((res) => {
      //console.log("Logout")
      //console.log(res);
      props.removeSessionId();
      showToast(toast, toastIdRef, 'Logout berhasil!', 'Sampai jumpa!', 'success', 2000, true);
      setToken(null);
      setSession(null);
    }).catch(e => {
      //console.log(e);
    });
  }
  
  useEffect(() => {
    if(currentSession !== null) {
      //console.log("TRYING USEEFFECT");
      //console.log(currentSession);
      api.get('/account', {
        params: {
          session_id: currentSession
        }
      }).then((res) => {
        setUser(res.data.name);
        //console.log("CURRENT TOKEN");
        //console.log(res);
      }).catch(e => {

      });
    }
  });

  return (
    <Flex flex='1' w='100%' h='100vh' justifyContent='center'>
      <form style={{height: '100' + '%'}}>
        <Flex w={{base: '50vw', lg: '25vw'}} h='100%' flexDirection='column' justifyContent='center'>
          <Text color="black">
            {/* currentUser: {currentUser}<br />
            currentToken: {currentToken}<br /> 
            currentToken (REDUX): {props.session_id}*/}
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
          {/* <Button
            colorScheme='blue'
            marginTop='8px'
            onClick={logout}
          >
            Logout
          </Button> */}
        </Flex>
      </form>
    </Flex>
  );
}

// export const LoginFormSection = () => {
//   return (
//     <Flex flex='1' w='100%' h='100vh' justifyContent='center'>
//       <LoginForm />
//     </Flex>
//   );
// }

export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);