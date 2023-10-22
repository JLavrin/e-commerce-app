'use client'

import { FunctionComponent } from 'react'
import styled from 'styled-components'

type Props = {
  text: string
}

const Divider: FunctionComponent<Props> = ({ text }) => (
  <StyledContainer>
    <StyledLine />
    <p>
      {text}
    </p>
    <StyledLine />
  </StyledContainer>
)


const StyledContainer = styled.div`
  margin: 15px 0;
  height: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  
  p {
    font-size: .85rem;
    color: gray;
  }
`

const StyledLine = styled.div`
  height: 1px;
  width: 40%;
  background-color: lightgray;
`

export default Divider
