"use client"

import { Appbar } from '@/components/appbar'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const Provider = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <SessionProvider>
          <Appbar/>
            {children}
        </SessionProvider>
    </div>
  )
}

export default Provider