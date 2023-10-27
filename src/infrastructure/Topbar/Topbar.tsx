import { FunctionComponent } from 'react'
import UserNotLoggedIn from '@/infrastructure/Topbar/components/UserNotLoggedIn'
import styles from './topbar.module.sass'
import TopbarLinks from '@/infrastructure/Topbar/components/TopbarLinks'
import Image from 'next/image'

type Props = {
  client?: {
    user: string
    cart: number[]
  }
}

const Topbar: FunctionComponent<Props> = ({ client }) => {
  const pathname = '/login'

  return (
    <div className={styles.topbar}>
      {/*<Hamburger categories={[]}/>*/}
      <div className={styles.logo}>
        <h1>Lavrin_Bikes</h1>
        <Image
          height={30}
          width={30}
          priority
          src="/images/logo.png"
          alt="logo"
          style={{
            objectFit: 'contain',
            objectPosition: 'bottom'
          }}
        />
      </div>
      <div className={styles.linksWrapper}>
        <TopbarLinks/>
        <UserNotLoggedIn isLoginPage={pathname === '/login'} client={client}/>
      </div>
    </div>
  )
}

export default Topbar
