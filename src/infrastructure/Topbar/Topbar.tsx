import { FunctionComponent } from 'react'
import UserNotLoggedIn from '@/infrastructure/Topbar/components/UserNotLoggedIn'
import Link from 'next/link'
import styles from './topbar.module.sass'

const Topbar: FunctionComponent = () => {
  return (
    <div className={styles.topbar}>
      <div>
        <Link href="/">
          <h2>Szop_App</h2>
        </Link>
        <UserNotLoggedIn />
      </div>
    </div>
  )
}

export default Topbar
