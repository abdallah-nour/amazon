import React from 'react'
import Logo from '../../components/Logo'
import TxtField from '../../components/TxtField'
import Button from '../../components/Button'
import useForm from '../../components/useForm'
import { db, auth } from '../../firebase'
import * as Sign from '../../components/SignComponents'
import * as Txt from '../../components/Txt'
import * as S from './style';

function CreateUser() {
  auth.createUserWithEmailAndPassword(inputs.email, inputs.password)
    .then((auth) => {
      // here when successfully create the user and the password.
      history.push('/');
    })
    .catch(err => {
      alert(err.message);
      console.log(err.message);
    })
}

export default function SignUp() {
  const [inputs, handleChange, handleSubmit] = useForm({ name: '', email: '', password: '', repassword: '' }, CreateUser);
  return (
    <Sign.Container>
      <Sign.Content maxWidth='370px' padding=' 0 0 5px'>
        <Logo marginBottom='18px' />
        <Sign.Form onSubmit={handleSubmit} maxWidth='350px' padding='14px 18px 14px' marginBottom='20px' headerTxt='Create account'>
          <TxtField type='name' name='name' value={inputs.name} onChange={handleChange} labelTxt='Your name' />
          <TxtField type='email' name='email' value={inputs.email} onChange={handleChange} labelTxt='Email' />
          <TxtField type='password' name='password' value={inputs.password} onChange={handleChange} labelTxt='Password'
            placeholder='At least 6 characters' bottomDiv={S.PasswordBottomTxt} marBottom='10px' />
          <TxtField type='password' name='repassword' value={inputs.repassword} onChange={handleChange} labelTxt='Re-enter password' />
          <Button >Create your Amazon account</Button>
          <Txt.P margin='15px 0 0 0' >By creating an account, you agree to Amazon's
            <Txt.CustomLink bright='65%'> Conditions of Use </Txt.CustomLink>
            and
            <Txt.CustomLink bright='65%'> Privacy Notice.</Txt.CustomLink>
          </Txt.P>
          <Sign.ShadowedFooter padding='15px 0 0 0' margin='26px 0 0 0'>
            <Txt.P margin='10px 0 0 0' size='13px'  >
              Already have an account?
              <Txt.CustomLink to='/signin' size='13px'>Sign-in </Txt.CustomLink>
              <S.Arrow />
            </Txt.P>
          </Sign.ShadowedFooter>
        </Sign.Form>
      </Sign.Content>
      <Sign.Footer padding='20px 0 0' />
    </Sign.Container>
  )
}
