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
                objectFit: 'cover',
                objectPosition: 'left'
              }}
            />
        </div>
        <form className={styles.addToCartSection}>
          <div className={styles.title}>
            <h2>{product.name}</h2>
          </div>
          <div className={styles.description}>
            <p>{product.description}</p>
          </div>
          <div className={styles.price}>
            <h4><span>Cena</span>{product.price} zł</h4>
          </div>
          <div className={styles.quantity}>
            <p><span>Ilość</span></p>
            <select className={styles.quantitySelect}>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className={styles.size}>
            <p><span>Rozmiar</span></p>
            <select className={styles.sizeSelect}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L" selected>L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <button type="submit" className={styles.addToCart}>Dodaj do koszyka</button>
        </form>
      </div>
      <div className={styles.productDescription}>
        <h2>Opis Produktu</h2>
        <p>Marka <span>{product.name}</span></p>
        <p>Typ <span>{product.description}</span></p>
        <p>Waga <span>{product.details.general.weight}</span></p>
        <p>Kolor <span>{product.details.general.color}</span></p>
        <p>Płeć <span>{product.details.general.gender}</span></p>
        <h2>Specyfikacja</h2>
        <p>Rozmiar ramy <span>{product.details.frame.size}</span></p>
        <p>Materiał ramy <span>{product.details.frame.material}</span></p>
        <p>Widelec <span>{product.details.frame.fork}</span></p>
        <p>Tylny amortyzator <span>{product.details.frame.rearShock}</span></p>
        <h2>Koła</h2>
        <p>Rozmiar kół <span>{product.details.wheels.size}</span></p>
        <p>Opony <span>{product.details.wheels.tires}</span></p>
        <p>Obręcze <span>{product.details.wheels.rims}</span></p>
        <p>Hubs <span>{product.details.wheels.hubs}</span></p>
        <p>Spokes <span>{product.details.wheels.spokes}</span></p>
        <h2>Przerzutki</h2>
        <p>Przerzutka przednia <span>{product.details.drive.frontDerailleur}</span></p>
        <p>Przerzutka tylna <span>{product.details.drive.rearDerailleur}</span></p>
        <p>Manetki <span>{product.details.drive.shifters}</span></p>
        <p>Kaseta <span>{product.details.drive.cassette}</span></p>
        <p>Łańcuch <span>{product.details.drive.chain}</span></p>
        <h2>Hamulce</h2>
        <p>Hamulce <span>{product.details.brakes.brakes}</span></p>
        <p>Manetki hamulca <span>{product.details.brakes.brakeLevers}</span></p>
        <h2>Komponenty</h2>
        <p>Chwyty <span>{product.details.components.grips}</span></p>
        <p>Kierownica <span>{product.details.components.handlebar}</span></p>
        <p>Wspornik kierownicy <span>{product.details.components.stem}</span></p>
        <p>Siodło <span>{product.details.components.saddle}</span></p>
        <p>Sztyca <span>{product.details.components.seatpost}</span></p>
        <p>Pedały <span>{product.details.components.pedals}</span></p>
      </div>
    </div>
  )
}

export default ProductPage
