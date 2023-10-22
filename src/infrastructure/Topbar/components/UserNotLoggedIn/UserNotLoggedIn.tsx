import { FunctionComponent } from 'react'
import Link from 'next/link'

type Props = {
  isLoginPage: boolean
}

const UserNotLoggedIn: FunctionComponent<Props> = ({ isLoginPage }) => (
  <>
    {isLoginPage ? <Link href="/">wróć</Link> : <Link href="/login">zaloguj</Link>}
  </>
)

export default UserNotLoggedIn
