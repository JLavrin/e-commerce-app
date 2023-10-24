import Image from 'next/image'
import data, { Category } from '@/app/sklep/[categoryId]/data'
import styles from './product.module.sass'
import Link from 'next/link'

const ProductPage = ({ params }: { params: { categoryId: string, product: string } }) => {
  const product = data[params.categoryId as Category].find((element) => element.slug === params.product)!

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.breadcrumbs}>
          <Link href="/">
            <p>Lavrin_Bikes</p>
          </Link>
          /
          <Link href={`/sklep/${params.categoryId}`}>
            <p>{params.categoryId}</p>
          </Link>
          / {product.name}
        </div>
        <h1>{product.name}</h1>
      </div>
      <div className={styles.productDetails}>
        <div className={styles.image}>
          <Image
            fill
            priority
            src={product.imageSrc}
            alt={product.name}
            style={{
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductPage
