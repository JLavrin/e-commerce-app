import { FunctionComponent } from 'react'
import styles from './login-form.module.sass'

const LoginForm: FunctionComponent = () => {

  return (
    <div className={styles.loginForm}>
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Hasło" />
      <button type="submit" >Zaloguj się</button>
    </div>
  )
}


export default LoginForm
