'use client'
import {FunctionComponent} from "react";

import styles from './hamburger.module.sass'
import useMenuStore from "@/store/useMenuStore";


const Hamburger: FunctionComponent = () => {
  const { isOpen, toggle } = useMenuStore()

  const spanStyle = isOpen ? styles.open : undefined

  return (
    <div onClick={toggle} className={styles.hamburger}>
      <span className={spanStyle} />
      <span className={spanStyle} />
      <span className={spanStyle} />
    </div>
  )
}

export default Hamburger
