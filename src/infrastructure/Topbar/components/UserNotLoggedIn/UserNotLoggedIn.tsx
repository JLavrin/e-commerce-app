import { FunctionComponent } from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'

type Props = {
  isLoginPage: boolean
  client?: string

}

const UserNotLoggedIn: FunctionComponent<Props> = ({ isLoginPage, client }) => {
  if (client) {
    return (
      <div>
        <Link href="/logout">
          Zalogowano jako {client}
        </Link>
      </div>
    )
  }

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
