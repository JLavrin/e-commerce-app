'use client'

import { FunctionComponent } from 'react'
import styled from 'styled-components'

const LoginForm: FunctionComponent = () => {

  return (
    <StyledFormWrapper>
      <StyledInput name="email" placeholder="Email" />
      <StyledInput name="password" placeholder="Hasło" />
      <StyledButton type="submit" >Zaloguj się</StyledButton>
    </StyledFormWrapper>
  )
}

const StyledFormWrapper = styled.div`
  margin: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid lightgray;
  border-radius: 8px;
  outline: none;
  font-size: .85rem;
`

const StyledButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: .85rem;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`

export default LoginForm
