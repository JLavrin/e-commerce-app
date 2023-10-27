import Link from 'next/link'
import AppleIcon from '@/infrastructure/icons/AppleIcon'
import GoogleIcon from '@/infrastructure/icons/GoogleIcon'
import MetaIcon from '@/infrastructure/icons/MetaIcon'
import Divider from '@/infrastructure/Divider'
import styles from './register.module.sass'
import RegisterForm from '@/infrastructure/RegisterForm'

const RegisterPage = () => (
  <div className={styles.page}>
    <div className={styles.wrapper}>
      <h2>Rejestracja</h2>
      <p>Zarejestruj się za pomocą konta</p>
      <div className={styles.providers}>
        <Link href="/login">
          <AppleIcon/>
        </Link>
        <Link href="/login">
          <GoogleIcon/>
        </Link>
        <Link href="/login">
          <MetaIcon/>
        </Link>
      </div>
      <Divider text="lub"/>
      <RegisterForm />
    </div>
  </div>
)

export default RegisterPage
