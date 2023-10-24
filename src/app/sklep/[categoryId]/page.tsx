import data, { Category } from '@/app/sklep/[categoryId]/data'
import Image from 'next/image'
import Link from 'next/link'
import styles from './category.module.sass'

const CategoryPage = ({ params }: { params: { categoryId: string}}) => {
   return (
     <div className={styles.pageWrapper}>
        <div className={styles.imagesWrapper}>
          {data[params.categoryId as Category].map((element) => (
            <Link
              href={`/sklep/${params.categoryId}/${element.slug}`}
              className={styles.imageContainer}
              key={element.name}
            >
              <Image
                fill
                priority
                src={element.imageSrc}
                alt={element.name}
                sizes="100%"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
              }}
              />
              <div className={styles.imageText}>
                <h3>{element.name}</h3>
                <p>{element.description}</p>
              </div>
            </Link>
          ))}
        </div>
     </div>
   )
}

export default CategoryPage
