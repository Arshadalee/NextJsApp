"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import './login.css'
const About = () => {
  const router = useRouter();
  return (
    <div>
     <center> <h1 className="heading">This is about page</h1>
      <br/>
      <button onClick={()=>router.push("/")}>Home</button>
      <button onClick={()=>router.push("/about/aboutStudent")}>about Student</button></center>
    </div>
  )
}

export default About
