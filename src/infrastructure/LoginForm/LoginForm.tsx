'use client'

import { FunctionComponent } from 'react'
import styles from './login-form.module.sass'
import { useFormState, useFormStatus } from 'react-dom'
import { handleLoginSubmit } from '@/app/login/actions'

const LoginForm: FunctionComponent = () => {
  const [state, formAction] = useFormState(handleLoginSubmit, {
    email: '',
    password: '',
    message: ''
  })


  return (
    <form className={styles.loginForm} action={formAction}>
      {state?.message && <p>{state.message}</p>}
      <input name="email" placeholder="Email" required />
      <input name="password" placeholder="Hasło" type="password" required />
      <button type="submit">Zaloguj się</button>
    </form>
  )
}


export default LoginForm
