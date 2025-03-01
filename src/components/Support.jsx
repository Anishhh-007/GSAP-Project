import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)
const Support = () => {
    useGSAP(()=>{
        gsap.from('div p' , {
            y:-50,
            delay:0,
            opacity:0,
            duration:1
        })
    })
    
  return (
    <div className='flex justify-center items-center h-[100vh] text-3xl'>
      <p>Support us</p>
    </div>
  )
}

export default Support
