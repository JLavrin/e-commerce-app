'use server'

import mongo from '@/db/mongo'
import * as bcrypt from 'bcrypt'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export async function handleRegisterSubmit(prevState: any, payload: any) {
  let parsed: {
    email: string
    password: string
  }

  try {
     parsed = loginSchema.parse({
      email: payload.get('email'),
      password: payload.get('password')
    })
  } catch (error) {
    let message = ''
    if (error instanceof z.ZodError) {
      if (error.issues[0].code === 'invalid_string') {
        message = 'Niepoprawny format email'
      }

      if (error.issues[0].code === 'too_small') {
        message = 'Hasło musi mieć minimum 8 znaków'
      }
    }

    return {
      email: '',
      password: '',
      message: message || 'Niepoprawnie wypełniony formularz, spróbuj ponownie'
    }
  }

  let user: any

  try {
    const client = await mongo
    const db = client.db('lavrin').collection('users')

    user = await db.findOne({
      email: parsed.email
    })

    if (user) {
      return {
        email: '',
        password: '',
        message: 'Użytkownik o podanym adresie email już istnieje'
      }
    } else {
      await db.insertOne({
        email: parsed.email,
        password: bcrypt.hashSync(parsed.password, 10),
        cart: []
      })
    }
  } catch {
    return {
      email: '',
      password: '',
      message: 'Błąd rejestracji użytkownika'
    }
  }

  cookies().set('user', parsed.email)
  cookies().set('cart', JSON.stringify([]))
  redirect('/sklep/rowery')
}
