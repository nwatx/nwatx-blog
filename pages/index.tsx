import Head from 'next/head'
import Navbar from '../components/Navbar'
import NavBarLayout from '../layouts/NavBarLayout'

export default function Home() {
  return (
    <NavBarLayout>
      <div className='w-full h-52 bg-red-500' />
    </NavBarLayout>
  )
}
