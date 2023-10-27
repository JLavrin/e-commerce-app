'use client'

import { FunctionComponent } from 'react'
import UserNotLoggedIn from '@/infrastructure/Topbar/components/UserNotLoggedIn'
import Link from 'next/link'
import styles from './topbar.module.sass'
import Hamburger from "@/infrastructure/Topbar/components/Hamburger";
import { usePathname } from 'next/navigation'

type Props = {
  client?: string
}

const Topbar: FunctionComponent<Props> = ({ client }) => {
  const pathname = usePathname()
  const categories = [
    { name: 'Lavrin_Bikes', url: '/' },
    { name: 'Rowery', url: '/sklep/rowery' },
    { name: 'Serwis', url: '/serwis' },
    { name: 'Kontakt', url: '/kontakt' }
  ] as const

  const getCssClass = (url: string) => {
    if (url !== '/' && pathname.includes(url)) {
      return styles.current
    }

    return undefined
  }

  return (
    <div className={styles.topbar}>
      <div>
        <Hamburger categories={categories} />
        {categories.map(({ name, url }) => (
          <Link key={url} href={url}>
            <h2 className={getCssClass(url)}>{name}</h2>
          </Link>
        ))}
        <UserNotLoggedIn isLoginPage={pathname === '/login'} client={client} />
      </div>
    </div>
  )
}

export default Topbar
