'use client'

import styles from './cart.module.sass'
import Image from 'next/image'
import useCartStore from '@/store/useCartStore'
const CartPage = () => {
  const {
    cart,
    handleRemove
  } = useCartStore()

  return (
    <div>
      <h1 className={styles.title}>Podgląd koszyka</h1>
      <div className={styles.cartWrapper}>
        <table className={styles.cartTable}>
          <thead>
            <tr>
              <th>lp.</th>
              <th>Zdjęcie</th>
              <th>Nazwa</th>
              <th>Rozmiar</th>
              <th>Ilość</th>
              <th>Cena (całość)</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {cart.map((el: any, index: number) => (
              <tr key={el.id} className={styles.cartItem}>
                <td>{index + 1}</td>
                <Image
                  src={el.product.imageSrc}
                  alt={el.name || 'zdjęcie produktu'}
                  width={120}
                  height={70}
                />
                  <td>{el.product.name}</td>
                  <td>{el.size}</td>
                  <td>{el.quantity}</td>
                  <td>{el.product.price * el.quantity} zł</td>
                {/*@ts-ignore*/}
                  <td><button onClick={handleRemove(el.id)} className={styles.removeButton}>Usuń</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default CartPage
