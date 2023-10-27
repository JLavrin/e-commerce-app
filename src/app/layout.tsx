import './global.sass'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './layout.module.sass'
import Topbar from '@/infrastructure/Topbar'
import { cookies } from 'next/headers'

const poppins = Poppins({ weight: ['100', '300', '400', '700'], subsets: ['latin-ext'] })

export const metadata: Metadata = {
  title: 'Lavrin_Bikes',
  description: 'Nejlepsze rowery w Gdańsku',
  authors: [{ name: 'jlavrin', url: 'https://github.com/JLavrin'}],
  category: 'Sport',
}

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const user = cookies().get('user')?.value as string | undefined
  const cart = (cookies().get('cart')?.value || [])  as number[]

  return (
    <html lang="pl">
    <body className={poppins.className}>
    <main className={styles.wrapper}>
      <Topbar client={user ? {user, cart} : undefined} />
      <div className={styles.content}>
        {children}
      </div>
    </main>
    </body>
    </html>
  )
}


export default RootLayout
