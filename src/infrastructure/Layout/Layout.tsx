'use client'

import { FunctionComponent, PropsWithChildren } from 'react'
import styled from 'styled-components'
import Topbar from '@/infrastructure/Topbar'

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <StyledLayout>
    <Topbar />
    <StyledContent>
      {children}
    </StyledContent>
  </StyledLayout>
)

const StyledLayout = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const StyledContent = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  display: flex;
  justify-content: center;
`

export default Layout
