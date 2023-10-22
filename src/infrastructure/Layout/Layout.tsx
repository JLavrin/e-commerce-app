'use client'

import { FunctionComponent, PropsWithChildren } from 'react'
import styled from 'styled-components'
import Topbar from '@/infrastructure/Topbar'

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <StyledLayout>
    <Topbar />
    <div>
      {children}
    </div>
  </StyledLayout>
)

const StyledLayout = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  > div:last-child {
    height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export default Layout
