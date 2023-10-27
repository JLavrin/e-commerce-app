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

export async function handleLoginSubmit(prevState: any, payload: any) {
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

    return {
      email: '',
      password: '',
      message: 'Niepoprawne dane logowania'
    }
  }


  let result = false
  let user: any

  try {
    const client = await mongo
    const db = client.db('lavrin').collection('users')

    user = await db.findOne({
      email: parsed.email
    })

    if (user) {
      result = await bcrypt.compare(parsed.password, user?.password)
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
      message: 'Błąd serwera'
    }
  }

  if (result) {
    cookies().set('cart', JSON.stringify(user.cart))
    cookies().set('user', parsed.email)
    redirect('/sklep/rowery')
  }
}
