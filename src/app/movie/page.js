import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css';
import { resolve } from 'styled-jsx/css';

export default async function movie() {

   await new Promise(resolve => setTimeout(resolve, 2000));

   const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '1cc8c79715msh4eea649fb32ba32p1b6006jsn59f44d4c882e',
         'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
   };


   const response = await fetch(url, options);
   const result = await response.json();
   const mainData = result.titles;
   // console.log(result)


   return (
      <>
         <section className={styles.movieSection}>
            <div className={styles.container}>
               <h1>Series and Movies</h1>
               <div className={styles.card_section}>
                  {
                     mainData.map((curElem, index) => {
                        return <MovieCard key={index} {...curElem} />
                     })
                  }
               </div>
            </div>

         </section>
      </>
   )
}
