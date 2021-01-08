import * as Sign from "../../components/SignComponents";
import * as Txt from "../../components/Txt";
import * as bg from "../../components/Background";

import { auth, firebase } from "../../firebase";

import Button from "../../components/Button";
import Logo from "../../components/Logo";
import TxtField from "../../components/TxtField";
import useForm from "../../components/useForm";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../components/StateProvider";

// import { useState } from 'react'

export default function SignIn() {
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  async function SignIn(email, pass) {
    try {
      const res = await auth.signInWithEmailAndPassword(email, pass);
      const userName = res.user.displayName;
      dispatch({ type: "UPDATE_USER", payload: { name: userName } });
      history.push("/");
      // await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
    } catch (e) {
      console.log(e);
    }
  }

  const [inputs, handleChange, handleSubmit] = useForm(
    { email: "", password: "" },
    SignIn
  );

  function toSignUp() {
    history.push("/signUp");
  }

  return (
    <Sign.Container>
      <Sign.Content>
        <Logo />
        <Sign.Form
          onSubmit={handleSubmit}
          marginBottom="20px"
          headerTxt="Sign-In"
        >
          <TxtField
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            labelTxt="Email or mobile phone number"
          />
          <TxtField
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            labelTxt="Password"
            rightSpan={<Txt.CustomLink>Forgot your password?</Txt.CustomLink>}
          />
          <Button type="submit">Continue</Button>
          <Txt.P margin="15px 0 0 0">
            By continuing, you agree to Amazon's{" "}
            <Txt.CustomLink bright="65%">Conditions of Use</Txt.CustomLink> and{" "}
            <Txt.CustomLink bright="65%"> Privacy Notice.</Txt.CustomLink>
          </Txt.P>
          <Txt.CustomLink size="13px" display="block" margin="22px 0 0 0">
            <bg.I
              bgPosition="-366px -86px"
              margin="0 4px 1px 0"
              width="7px"
              height="7px"
              bg="url(https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS-sprite_1x-c4a765aedd886dc04d89e7e93b6a02c59ecb7013._V2_.png)"
            />
            Need help?
          </Txt.CustomLink>
        </Sign.Form>
        <Txt.Divide margin="25px 0 10px 0">New to Amazon?</Txt.Divide>
        <Button
          onClick={toSignUp}
          bgColor="linear-gradient(to bottom,#f7f8fa,#e7e9ec)"
          hoverBg="linear-gradient(to bottom,#e7eaf0,#d9dce1)"
          borderColor="#adb1b8 #a2a6ac #8d9096"
        >
          Create your Amazon account
        </Button>
      </Sign.Content>
      <Sign.Footer />
    </Sign.Container>
  );
}
