import heroStyles from '@/app/styles/herosection.module.css';
import styles from '@/app/styles/common.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection({ title, imageUrl }) {
   return (
      <main className={heroStyles.main_section}>
         <div className={styles.container}>
            <div className={styles.grid_two_section}>
               <div className={heroStyles.hero_content}>
                  <h1>{title}</h1>
                  <p>
                     It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
                  </p>
                  <Link href={'/movie'}>
                     <button className=''>
                        Explore Movies
                     </button>
                  </Link>
               </div>

               <div className={heroStyles.hero_image}>
                  <Image src={imageUrl} alt={'hero'} width={500} height={500} />
               </div>
            </div>

         </div>
      </main>
   )
}
