'use client'
import { FunctionComponent } from 'react'

import styles from './hamburger.module.sass'
import useMenuStore from '@/store/useMenuStore'
import { is } from 'immutable'
import Link from 'next/link'

type Props = {
  categories: readonly { name: string; url: string }[]
}

const Hamburger: FunctionComponent<Props> = ({ categories }) => {
  const { isOpen, toggle } = useMenuStore()

  const spanStyle = isOpen ? styles.open : undefined
  const menuStyle = isOpen ? styles.open : ''

  return (
    <>
      <div onClick={toggle} className={styles.hamburger}>
        <span className={spanStyle}/>
        <span className={spanStyle}/>
        <span className={spanStyle}/>
      </div>
      <nav className={styles.menu + menuStyle }>
        {categories.map(({ name, url }) => (
          <Link key={url} href={url}>
            <h2>{name}</h2>
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Hamburger
