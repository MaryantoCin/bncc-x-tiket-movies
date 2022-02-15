import Meta from "../components/meta";
import LoginTextSection from "../components/loginTextSection";
import LoginFormSection from "../components/loginFormSection";
import { Flex } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <Meta title="BNCC x tiket Movies" desc="Lorem ipsum" />
      <Flex
        w="100vw"
        h="100vh"
        color="white"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <LoginTextSection />
        <LoginFormSection />
      </Flex>
    </>
  );
}
