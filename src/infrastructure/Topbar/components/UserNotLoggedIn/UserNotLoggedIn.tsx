'use client'

import { FunctionComponent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const UserNotLoggedIn: FunctionComponent = () => {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'
  return (
    <div>
      {isLoginPage ? (
        <Link href="/">wróć</Link>
      ) : (
        <Link href="/login">zaloguj</Link>
      )}
    </div>
  )
}

export default UserNotLoggedIn
