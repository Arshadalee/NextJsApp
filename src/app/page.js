
"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";

export default function Home() {
 const router=useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h3>Home page</h3>
       <Link href={"/login"}>Go to login Page</Link>
      <br/>
      <button onClick={()=>router.push("/about")}>About Us</button>
      </main>
    
    </div>
  );
}
