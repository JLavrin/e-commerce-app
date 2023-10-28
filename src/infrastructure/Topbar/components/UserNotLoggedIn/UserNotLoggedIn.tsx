'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import CartIcon from '@/infrastructure/icons/CartIcon'
import UserIcon from '@/infrastructure/icons/UserIcon'

import styles from './user-not-logged-in.module.sass'
import { usePathname } from 'next/navigation'
import useCartStore from '@/store/useCartStore'

type Props = {
  isLoginPage: boolean
  client?: {
    user: string
    cart: number[]
  }
}

const UserNotLoggedIn: FunctionComponent<Props> = ({ isLoginPage, client }) => {
  const [isUserOpened, setIsUserOpened] = useState(false)
  const [isCartOpened, setIsCartOpened] = useState(false)
  const pathname = usePathname()
  const { cartLength } = useCartStore()

  const handleCartClick = () => {
    setIsCartOpened(!isCartOpened)
    setIsUserOpened(false)
  }

  const handleUserClick = () => {
    setIsUserOpened(!isUserOpened)
    setIsCartOpened(false)
  }


  if (!client) {
    return (
      <div className={styles.wrapper}>
        <Link
          href="/login"
          style={{ fontWeight: pathname === '/login' ? '700' : '300' }}
        >
          {pathname === '/login' ? 'logowanie' : 'zaloguj'}
        </Link>
      </div>
    )
  }


  return (
    <>
      <Link className={styles.wrapper} href="/koszyk">
        <CartIcon/>
        {cartLength > 0 && <div className={styles.cartCount}>{cartLength}</div>}
      </Link>
      <div className={styles.wrapper} onClick={handleUserClick}>
        <UserIcon/>
        <div className={`${styles.userPopper} ${!isUserOpened && styles.closed}`}>
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

export default UserNotLoggedIn
