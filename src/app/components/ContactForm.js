'use client'

import styles from "@/app/contact/contact.module.css"
import { useState } from "react";


export default function ContactForm() {

   const [user, setUser] = useState({
      username: "",
      email: "",
      phone: "",
      message: ""
   })
   const [status, setStatus] = useState(null);


   function handleChange(e) {
      // const name = e.target.name;
      // const value = e.target.value;

      const { name, value } = e.target;

      console.log(name, value)

      setUser((prevUser) => ({ ...prevUser, [name]: value }));
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
   }


   return (
      <form className={styles.contact_form} onSubmit={handleSubmit}>
         <div className={styles.input_field}>
            <label htmlFor="username" className={styles.label}>
               Enter your name
               <input type="text" name="username" id="username"
                  placeholder="Enter your name"
                  // className={mulish.className}
                  value={user.username}
                  onChange={handleChange}
                  required
               />
            </label>
         </div>

         <div className={styles.input_field}>
            <label htmlFor="email" className={styles.label}>
               Email
               <input type="text" name="email" id="email"
                  placeholder="Enter your email"
                  // className={mulish.className}
                  value={user.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
               />
            </label>
         </div>

         <div className={styles.input_field}>
            <label htmlFor="phone" className={styles.label}>
               Phone Number
               <input type="number" name="phone" id="phone"
                  placeholder="Enter your phone"
                  // className={mulish.className}
                  value={user.phone}
                  onChange={handleChange}
                  required
                  autoComplete="off"
               />
            </label>
         </div>

         <div className={styles.input_field}>
            <label htmlFor="message" className={styles.label}>
               Message
               <textarea name="message" id="message" rows={5}
                  placeholder="Enter your Message"
                  // className={mulish.className}
                  value={user.message}
                  onChange={handleChange}
                  required
                  autoComplete="off"
               />
            </label>
         </div>

         <div>
            {/* {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>} */}

            <button type="submit" >Send Message</button>
         </div>
      </form>
   )
}
