'use client'

import { FunctionComponent } from 'react'
import styles from './login-form.module.sass'
import { useFormState } from 'react-dom'
import { handleLoginSubmit } from '@/app/login/actions'

const LoginForm: FunctionComponent = () => {
  const [state, formAction] = useFormState(handleLoginSubmit, {
    email: '',
    password: '',
    message: ''
  })


  return (
    <>
    <form className={styles.loginForm} action={formAction}>
      <input name="email" placeholder="Email" required />
      <input name="password" placeholder="Hasło" type="password" required />
      <button type="submit">Zaloguj się</button>
    </form>
    {state?.message && <div className={styles.error}>{state.message}</div>}
    </>
  )
}


export default LoginForm
