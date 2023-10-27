import { NextRequest, NextResponse } from 'next/server'
import * as bcrypt from 'bcrypt'
import mongo from '@/db/mongo'
export const GET = async (request: Request) => {
  const { password, email } = Object.fromEntries(new URL(request.url).searchParams)

  const hash = bcrypt.hashSync(password, 10)
  const result = bcrypt.compareSync(password, hash)

  try {
    const client = await mongo
    const db = client.db()
    const collection = db.collection('users')
    const result = await collection.findOne({
      email,
    })

    if (result) {

    }
  } catch {

  }


  return NextResponse.json({
    result,
    password: hash,
    email,
  })
}

export const POST = async (request: NextRequest) => {
  const body = await request.json()




  return NextResponse.json({
    body,
  }, {
    status: 201,
  })
}

