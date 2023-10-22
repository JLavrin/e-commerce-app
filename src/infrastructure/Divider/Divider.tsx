import { FunctionComponent } from 'react'

import styles from './divider.module.sass'

type Props = {
  text: string
}

const Divider: FunctionComponent<Props> = ({ text }) => (
  <div className={styles.divider}>
    <div />
    <p>
      {text}
    </p>
    <div />
  </div>
)

export default Divider
