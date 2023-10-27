'use client'

import { FunctionComponent } from 'react'
import styles from './register-form.module.sass'
import { useFormState } from 'react-dom'
import { handleRegisterSubmit } from '@/app/register/actions'

const RegisterForm: FunctionComponent = () => {
  const [state, formAction] = useFormState(handleRegisterSubmit, {
    email: '',
    password: '',
    message: ''
  })


  return (
    <>
      <form className={styles.registerForm} action={formAction}>
        <input name="email" placeholder="Email" required/>
        <input name="password" placeholder="Hasło" type="password" required/>
        <button type="submit">Zarejestruj</button>
      </form>
      {state?.message && <div className={styles.error}>{state.message}</div>}
    </>
  )
}


export default RegisterForm
