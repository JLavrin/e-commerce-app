import { FunctionComponent } from 'react'
import UserNotLoggedIn from '@/infrastructure/Topbar/components/UserNotLoggedIn'
import Link from 'next/link'
import styles from './topbar.module.sass'
import Hamburger from "@/infrastructure/Topbar/components/Hamburger";

const Topbar: FunctionComponent = () => {
  const categories = [
    { name: 'Lavrin_Bikes', url: '/' },
    { name: 'Rowery', url: '/sklep/rowery' },
    { name: 'Części', url: '/sklep/czesci' },
    { name: 'Odzież', url: '/sklep/odziez' },
    { name: 'Akcesoria', url: '/sklep/akcesoria' },
    { name: 'Serwis', url: '/sklep/serwis' },
    { name: 'Kontakt', url: '/sklep/kontakt' }
  ] as const

  return (
    <div className={styles.topbar}>
      <div>
        <Hamburger categories={categories} />
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
