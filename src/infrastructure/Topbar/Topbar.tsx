import { FunctionComponent } from 'react'
import UserNotLoggedIn from '@/infrastructure/Topbar/components/UserNotLoggedIn'
import Link from 'next/link'
import styles from './topbar.module.sass'
import Hamburger from "@/infrastructure/Topbar/components/Hamburger";

const Topbar: FunctionComponent = () => {
  const categories = [
    { name: 'Lavrin_Bikes', url: '/' },
    { name: 'Rowery', url: '/rowery' },
    { name: 'Części', url: '/czesci' },
    { name: 'Odzież', url: '/odziez' },
    { name: 'Akcesoria', url: '/akcesoria' },
    { name: 'Serwis', url: '/serwis' },
    { name: 'Kontakt', url: '/kontakt' }
  ] as const

  return (
    <div className={styles.topbar}>
      <div>
        <Hamburger />
        {categories.map(({ name, url }) => (
          <Link key={url} href={url}>
            <h2>{name}</h2>
          </Link>
        ))}
        <UserNotLoggedIn />
      </div>
    </div>
  )
}

export default Topbar
