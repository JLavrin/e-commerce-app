'use client'

import { FunctionComponent } from 'react'
import UserNotLoggedIn from '@/infrastructure/Topbar/components/UserNotLoggedIn'
import Link from 'next/link'
import styles from './topbar.module.sass'
import Hamburger from "@/infrastructure/Topbar/components/Hamburger";
import { usePathname } from 'next/navigation'

const Topbar: FunctionComponent = () => {
  const pathname = usePathname()
  const categories = [
    { name: 'Lavrin_Bikes', url: '/' },
    { name: 'Rowery', url: '/sklep/rowery' },
    // { name: 'Części', url: '/sklep/czesci' },
    // { name: 'Odzież', url: '/sklep/odziez' },
    // { name: 'Akcesoria', url: '/sklep/akcesoria' },
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
        <UserNotLoggedIn isLoginPage={pathname === '/login'} />
      </div>
    </div>
  )
}

export default Topbar
