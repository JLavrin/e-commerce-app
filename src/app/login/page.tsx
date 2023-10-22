'use client'

import styled from 'styled-components'
import AppleIcon from '@/infrastructure/icons/AppleIcon'
import GoogleIcon from '@/infrastructure/icons/GoogleIcon'
import MetaIcon from '@/infrastructure/icons/MetaIcon'
import Divider from '@/infrastructure/Divider'
import LoginForm from '@/infrastructure/LoginForm'

const LoginPage = () => (
  <StyledLoginPage>
    <StyledTitle>Logowanie</StyledTitle>
    <StyledSubTitle>Zaloguj się używając konta</StyledSubTitle>
    <StyledProvidersContainer>
      <AppleIcon />
      <GoogleIcon />
      <MetaIcon />
    </StyledProvidersContainer>
    <Divider text="lub" />
    <LoginForm />
  </StyledLoginPage>
)

const StyledLoginPage = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  max-width: 500px;
`

const StyledTitle = styled.h2`
  padding: 10px;
  font-size: 1.5rem;
`

const StyledSubTitle = styled.p`
  font-size: .85rem;
`

const StyledProvidersContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export default LoginPage
