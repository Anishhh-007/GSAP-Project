import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const Navbar = () => {


    useGSAP(() => {
        gsap.from('ul li', {
            y: -30,
            duration: 1,
            opacity: 0,
           

        })
        gsap.from('#box', {
            y: -30,
            duration: 1,
            opacity: 0,
           

        })
    })



    return (
        <div className='h-[50px] flex items-center md:px-48 px-4 justify-between'>
            <Link to={'/'} ><div id='box' className='md:text-3xl text-2xl font-semibold hover:cursor-pointer'>GSAP</div></Link>
            <ul className='flex md:justify-end md:space-x-10 text-md md:text-xl items-center md:w-[80%]'>
                <Link to={'/'}><li className='hover:cursor-pointer hover:shadow-2xl hover:bg-gray-900 px-3 rounded-2xl py-2'>Home</li></Link>
                <Link to={'/about'}><li className='hover:cursor-pointer hover:shadow-2xl hover:bg-gray-900 px-3 rounded-2xl py-2'>About Us</li></Link>
                <Link to={'/contactus'}><li className='hover:cursor-pointer hover:shadow-2xl hover:bg-gray-900 px-3 rounded-2xl py-2'>Contact Us</li></Link>
                <Link to={'/support'}><li className='hover:cursor-pointer hover:shadow-2xl hover:bg-gray-900 px-3 rounded-2xl py-2'>Support Us</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
