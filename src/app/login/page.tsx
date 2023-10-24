import AppleIcon from '@/infrastructure/icons/AppleIcon'
import GoogleIcon from '@/infrastructure/icons/GoogleIcon'
import MetaIcon from '@/infrastructure/icons/MetaIcon'
import Divider from '@/infrastructure/Divider'
import LoginForm from '@/infrastructure/LoginForm'
import LoginFooter from '@/infrastructure/LoginFooter'
import Link from 'next/link'
import styles from './login.module.sass'

const LoginPage = () => (
  <div className={styles.page}>
    <div className={styles.wrapper}>
      <h2>Logowanie</h2>
      <p>Zaloguj się używając konta</p>
      <div className={styles.providers}>
        <Link href="/login/apple-id">
          <AppleIcon/>
        </Link>
        <Link href="/login/google">
          <GoogleIcon/>
        </Link>
        <Link href="/login/meta">
          <MetaIcon/>
        </Link>
      </div>
      <Divider text="lub"/>
      <LoginForm/>
      <LoginFooter/>
    </div>
  </div>
)

export default LoginPage
