
import Logo from '@/components/Shared/logo/logo'
import React from 'react'
import { NavBarDesktop, NavBarMobile } from '..'


export  function Navbar() {
  return (
    <nav className='w-[90%] md:w-full md:max-w-5xl mx-auto sticky
     top-5 z-20 flex items-center justify-between py-3 px-6
      bg-purple-500/30  backdrop-blur-md rounded-full shadow-lg border border-purple-400/20'>
        <Logo/> 
        <NavBarDesktop/>
        <NavBarMobile/>
    </nav>
  )
}


