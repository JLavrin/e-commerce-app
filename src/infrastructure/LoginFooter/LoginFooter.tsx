'use client'

import { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const LoginFooter: FunctionComponent = () => (
  <StyledFooter>
    <p>
      Nie pamiętasz hasła? <Link href="/login/forgot-password">zresetuj hasło</Link>
    </p>
    <p>
      Nie masz konta? <Link href="/login/register">zarejestruj się</Link>
    </p>
  </StyledFooter>
)

const StyledFooter = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: .80rem;
    margin: 5px 0;
  }

  a {
    font-size: .80rem;
    color: gray;
    text-decoration: none;
  }
`

export default LoginFooter

