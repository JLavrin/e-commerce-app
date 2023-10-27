'use client'

import { FunctionComponent } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import styles from './nav-item.module.sass'

type Props = {
  url: string
  title: string
}

const NavItem: FunctionComponent<Props> = ({ url, title}) => {
  const pathname = usePathname()

  const classNames = pathname.includes(url)
    ? `${styles.navItem} ${styles.current}`
    : styles.navItem

  return (
    <Link href={url} className={classNames}>
      <h2>{title}</h2>
    </Link>
  )
}

export default NavItem
