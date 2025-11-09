import React from 'react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { links } from '..'

export  function NavBarDesktop() {
  return (
    <div className='hidden md:flex items-center gap-4 text-lg'>
        {
            links.map((link) => (
                <Button key={link.name} asChild variant="ghost" >
                    <Link href={link.href}>{link.name}</Link>
                </Button>
            ))
        }
    </div>
  )
}
