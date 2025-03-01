import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)
const Home = () => {
useGSAP(()=>{
    gsap.from('div p' , {
        y:-50,
        delay:0,
        duration:1,
        opacity:0
    })
})
  return (
    <div className='flex justify-center items-center h-[100vh] text-3xl'>
      <p>I am Home</p>
    </div>
  )
}

export default Home
