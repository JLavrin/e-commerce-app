'use client'

import styled from 'styled-components'
import AppleIcon from '@/infrastructure/icons/AppleIcon'
import GoogleIcon from '@/infrastructure/icons/GoogleIcon'
import MetaIcon from '@/infrastructure/icons/MetaIcon'
import Divider from '@/infrastructure/Divider'
import LoginForm from '@/infrastructure/LoginForm'
import LoginFooter from '@/infrastructure/LoginFooter'
import Link from 'next/link'

const LoginPage = () => (
  <StyledLoginPage>
    <StyledTitle>Logowanie</StyledTitle>
    <StyledSubTitle>Zaloguj się używając konta</StyledSubTitle>
    <StyledProvidersContainer>
      <Link href="/login/apple-id">
        <AppleIcon />
      </Link>
      <Link href="/login/google">
        <GoogleIcon />
      </Link>
      <Link href="/login/meta">
        <MetaIcon />
      </Link>
    </StyledProvidersContainer>
    <Divider text="lub" />
    <LoginForm />
    <LoginFooter />
  </StyledLoginPage>
)

const StyledLoginPage = styled.div`
  margin-top: 40px;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  max-width: 400px;
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
  gap: 30px;
  cursor: pointer;

  svg:nth-child(1):hover {
    fill: gray;
  }

  svg:nth-child(2):hover {
    fill: #c22114;
  }

  svg:nth-child(3):hover {
    fill: #4285f4;
  }
`

export default LoginPage
