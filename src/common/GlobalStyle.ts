'use client'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #f5f5f5;
    min-height: 100vh;
    width: 100%;
  }
`

export default GlobalStyle
