'use client'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { links } from '..';
import Link from 'next/link';

export default function NavBarMobile() {

  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div className='flex md:hidden  '>
      <Button variant="outline" className='text-black/80'
        onClick={() => setIsOpen(!IsOpen)}>
        
        { IsOpen ? <X size={20}/> : <Menu size={20}/> }
      </Button>

      {
        IsOpen && (
          <div className='absolute top-full right-4 mt-2 bg-white text-black
            rounded-lg shadow-lg p-4 w-48 flex flex-col gap-3'
          >
            {
              links.map((link) => (
                <Button key={link.name} asChild variant="ghost" className='w-full'
                  onClick={() => setIsOpen(false)}>
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              ))
            }
          </div>
        )
      }
    </div>
  )
}
