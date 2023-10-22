'use client'

import { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import { usePathname } from 'next/navigation'
import UserNotLoggedIn from '@/infrastructure/Topbar/components/UserNotLoggedIn'

const Topbar: FunctionComponent = () => {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  return (
    <StyledTopbar>
      <div>
        <h2>Szop_App</h2>
        <UserNotLoggedIn isLoginPage={isLoginPage} />
      </div>
    </StyledTopbar>
  )
}

const StyledTopbar = styled.nav`
  padding: 10px;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.15);
  
  > div {
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    
    h2 {
      font-size: 1rem;
      color: #333;
    }
    
    a {
      color: #333;
      text-decoration: none;
      font-size: .9rem;
    }
  }
`

export default Topbar
