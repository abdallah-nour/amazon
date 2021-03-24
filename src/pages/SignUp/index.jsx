import * as S from "./style";
import * as Sign from "../../components/SignComponents";
import * as Txt from "../../components/Txt";

import Button from "../../components/Button";
import Logo from "../../components/Logo";
import React from "react";
import TxtField from "../../components/TxtField";
import { auth } from "../../firebase";
import useForm from "../../components/useForm";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../components/StateProvider";

export default function SignUp() {
  const [, dispatch] = useStateValue();
  const history = useHistory();

  async function CreateUser(email, password, name) {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      await res.user.updateProfile({ displayName: name });
      dispatch({
        type: "UPDATE_USER",
        payload: { name: res.user.displayName },
      });
      // let response = await res.user.sendEmailVerification();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }
  const [inputs, handleChange, handleSubmit] = useForm(
    { name: "", email: "", password: "", repassword: "" },
    CreateUser
  );
  return (
    <Sign.Container>
      <Sign.Content maxWidth="370px" padding=" 0 0 5px">
        <Logo marginBottom="18px" />
        <Sign.Form
          onSubmit={handleSubmit}
          maxWidth="350px"
          padding="14px 18px 14px"
          marginBottom="20px"
          headerTxt="Create account"
        >
          <TxtField
            type="name"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            labelTxt="Your name"
          />
          <TxtField
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            labelTxt="Email"
          />
          <TxtField
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            labelTxt="Password"
            placeholder="At least 6 characters"
            bottomDiv={S.PasswordBottomTxt}
            marBottom="10px"
          />
          <TxtField
            type="password"
            name="repassword"
            value={inputs.repassword}
            onChange={handleChange}
            labelTxt="Re-enter password"
          />
          <Button>Create your Amazon account</Button>
          <Txt.P margin="15px 0 0 0">
            By creating an account, you agree to Amazon's
            <Txt.CustomLink bright="65%"> Conditions of Use </Txt.CustomLink>
            and
            <Txt.CustomLink bright="65%"> Privacy Notice.</Txt.CustomLink>
          </Txt.P>
          <Sign.ShadowedFooter padding="15px 0 0 0" margin="26px 0 0 0">
            <Txt.P margin="10px 0 0 0" size="13px">
              Already have an account?
              <Txt.CustomLink to="/signin" size="13px" color="#0056b3">
                {" "}
                Sign-in{" "}
              </Txt.CustomLink>
              <S.Arrow />
            </Txt.P>
          </Sign.ShadowedFooter>
        </Sign.Form>
      </Sign.Content>
      <Sign.Footer padding="20px 0 0" />
    </Sign.Container>
  );
}
