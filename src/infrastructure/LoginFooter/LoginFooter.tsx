import { FunctionComponent } from 'react'
import Link from 'next/link'

import styles from './login-footer.module.sass'

const LoginFooter: FunctionComponent = () => (
  <div className={styles.loginFooter}>
    <p>
      Nie pamiętasz hasła? <Link href="/forgot-password">zresetuj hasło</Link>
    </p>
    <p>
      Nie masz konta? <Link href="/register">zarejestruj się</Link>
    </p>
  </div>
)


export default LoginFooter

