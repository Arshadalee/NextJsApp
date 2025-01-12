

import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
 
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h3>Home page</h3>
       <Link href={"/login"}>Go to login Page</Link>
      
      </main>
    
    </div>
  );
}
