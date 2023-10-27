'use client'

import { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import CartIcon from '@/infrastructure/icons/CartIcon'
import UserIcon from '@/infrastructure/icons/UserIcon'

import styles from './user-not-logged-in.module.sass'

type Props = {
  isLoginPage: boolean
  client?: {
    user: string
    cart: number[]
  }
}

const UserNotLoggedIn: FunctionComponent<Props> = ({ isLoginPage, client }) => {
  const [isOpened, setIsOpen] = useState(false)

  if (client) {
    return (
      <>
        <div className={styles.wrapper}>
          <CartIcon />
        </div>
        <div className={styles.wrapper} onClick={() => setIsOpen(!isOpened)}>
          <UserIcon />
          <div className={`${styles.userPopper} ${!isOpened && styles.closed}`}>
            <p>Zalogowano jako</p>
            <p>{client.user}</p>
            <Link href="/logout">
              <h3>wyloguj</h3>
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Link
        href="/login"
        style={{ fontWeight: isLoginPage ? '700' : '300' }}
      >
        {isLoginPage ? 'logowanie' : 'zaloguj'}
      </Link>
    </>
  )
}

export default UserNotLoggedIn
