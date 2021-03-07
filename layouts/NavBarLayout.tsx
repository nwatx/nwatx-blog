import React from 'react'
import Navbar from '../components/Navbar'

export default function NavBarLayout({children}) {
    return (
        <Navbar>
            {children}
        </Navbar>
    )
}
