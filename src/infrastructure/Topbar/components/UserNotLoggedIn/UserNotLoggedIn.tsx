import { FunctionComponent } from 'react'
import Link from 'next/link'

type Props = {
  isLoginPage: boolean
}

const UserNotLoggedIn: FunctionComponent<Props> = ({ isLoginPage }) => {
  return (
    <div>
      <Link
        href="/login"
        style={{ fontWeight: isLoginPage ? '700' : '300' }}
      >
        {isLoginPage ? 'logowanie' : 'zaloguj'}
      </Link>
    </div>
  )
}

export default UserNotLoggedIn
