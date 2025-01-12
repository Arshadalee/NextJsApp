"use client"
import React from 'react'
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is about page</h1>
      <br/>
      <button onClick={()=>router.push("/")}>Home</button>
    </div>
  )
}

export default About
