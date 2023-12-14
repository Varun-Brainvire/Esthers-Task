import React from 'react'
import { HeaderDiv } from '../Header.styles'
import { LoginDivContainer, LoginMainDiv } from '../LoginDiv/LoginDiv.styles'
import { P, VerificationButton } from './LoginVerfication.styles'
import { useRouter } from 'next/router'
import { ElementBox } from '../Buttons/Buttons.styles'

const LoginVerification = () => {
    const router = useRouter()
  return (
    <>
    <HeaderDiv forLogin={true}>
        <h1>Login</h1>
        </HeaderDiv>

        <LoginDivContainer>
            <LoginMainDiv>
                <P>You're almost there! Please check <b>{router.query.q}</b> to verify your email address.
                If you can't find it you need to check your spam folder
                </P>
                <ElementBox forVerification={true}>
                    <P>Verfied? Amazing! Now you're ready to login and get started</P>
                </ElementBox>
                
                <VerificationButton>Log in</VerificationButton>
            </LoginMainDiv>
        </LoginDivContainer>
        </>
  )
}

export default LoginVerification