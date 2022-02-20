import React, { useEffect, useState } from "react";
import { api } from "./api";
import { showToast } from "./showToast.js";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

import { mapStateToProps, mapDispatchToProps } from "../components/redux";
import { connect } from "react-redux";
import Router from "next/router";

/*
Component: FormInput
Receives: text (the column/input name) and type (the input type)
This component will show one form column, which includes one label and an input box.
*/

const InputForm = ({ text, type, disable }) => {
  return (
    <Flex flexDirection="column" marginBottom="8px">
      <FormControl color="black">
        <FormLabel
          htmlFor={text.toLowerCase()}
          marginBottom="4px"
          color="#4A5568"
          fontSize="1rem"
        >
          {text}
        </FormLabel>
        <Input type={type} id={text.toLowerCase()} isDisabled={disable} />
      </FormControl>
    </Flex>
  );
};

/*
Component: Login
This component will show the login form, which includes:
- Username Input Form
- Password Input Form
- Login Button
*/

const LoginForm = (props) => {
  const [disable, setDisable] = useState(false);

  const toast = useToast();
  const toastIdRef = React.useRef();

  function handleFailedLogin(message) {
    setDisable(false);
    showToast(toast, toastIdRef, "Login gagal!", message, "error", 2000, true);
  }

  function apiGetUserData(session_id) {
    // .. request for user data.
    api
      .get("/account", {
        params: {
          session_id: session_id,
        },
      })
      .then((res) => {
        // Step 5: If successful, save the data, and login.
        if (res.status === 200) {
          props.setSessionId(session_id, res.data);
          showToast(
            toast,
            toastIdRef,
            "Login berhasil!",
            "Selamat datang!",
            "success",
            2000,
            true
          );
          Router.push("/");
        }
      })
      .catch((e) => {
        handleFailedLogin("Mohon coba lagi...");
      });
  }

  function apiNewSession(request_token) {
    // ...create new session.
    api
      .post("/authentication/session/new", {
        request_token: request_token,
      })
      .then((status) => {
        // Step 4: If successful...
        if (status.data.success === true) {
          apiGetUserData(status.data.session_id);
        }
      })
      .catch((e) => {
        handleFailedLogin("Mohon coba lagi...");
      });
  }

  function apiValidateToken(username, password, data) {
    // Step 2: Validate Token with Username and Password.
    api
      .post("/authentication/token/validate_with_login", {
        username: username,
        password: password,
        request_token: data.data.request_token,
      })
      .then((res) => {
        // Step 3: If successful...
        if (res.data.success === true) {
          apiNewSession(data.data.request_token);
        }
      })
      .catch((e) => {
        console.log(e);
        handleFailedLogin("Username atau password salah...");
      });
  }

  function authenticate(e) {
    e.preventDefault();
    setDisable(true);

    // Read username and password from input boxes
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Step 1: Get new token.
    api
      .get("/authentication/token/new")
      .then((data) => {
        apiValidateToken(username, password, data);
      })
      .catch((e) => {
        handleFailedLogin("Mohon coba lagi...");
      });
  }

  useEffect(() => {
    const condition = props.session_id !== null;
    setDisable(condition);
    if (condition === true) {
      Router.push("/");
    }
  }, [props.session_id]);

  return (
    <Flex flex="1" w="100%" h="100vh" justifyContent="center">
      <form style={{ height: "100" + "%" }}>
        <Flex
          w={{ base: "50vw", lg: "25vw" }}
          h="100%"
          flexDirection="column"
          justifyContent="center"
        >
          <InputForm text="Username" type="text" disable={disable} />
          <InputForm text="Password" type="password" disable={disable} />
          <Button
            colorScheme="blue"
            marginTop="8px"
            onClick={authenticate}
            isLoading={disable}
          >
            Login
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
