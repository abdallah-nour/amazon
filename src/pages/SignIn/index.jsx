import React from 'react'
import Logo from '../../components/Logo'
import TxtField from '../../components/TxtField'
import SignFormContainer from '../../components/SignFormContainer'
import Button from '../../components/Button'
import * as S from './style'

export default function SignIn() {
  return (
    <S.Section1>
      <Logo />
      <SignFormContainer headerTxt='Sign-In'>
        <TxtField type='email' name='email' labelTxt='Email or mobile phone number' />
        <Button bcColor='linear-gradient(to bottom,#f5d78e,#eeb933)'>Here i'm</Button>
      </SignFormContainer>
    </S.Section1>
  )
}
