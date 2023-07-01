import styles from '@/app/styles/common.module.css';
import Image from 'next/image';

async function page({ params }) {

   const id = params.id;

   const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '1cc8c79715msh4eea649fb32ba32p1b6006jsn59f44d4c882e',
         'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
   };


   const response = await fetch(url, options);
   const result = await response.json();
   const mainData = result[0].details;
   // console.log(result[0].details)
   return (
      <div className={styles.container}>
         <h2 className={styles.movie_title}>Netflix / <span>{mainData.type}</span></h2>
         <div>
            <Image src={mainData.backgroundImage.url} alt={mainData.title} width={600} height={300} />
         </div>
         <div>
            <h1>{mainData.title}</h1>
            <p>{mainData.synopsis}</p>
         </div>
      </div>
   )
}

export default page