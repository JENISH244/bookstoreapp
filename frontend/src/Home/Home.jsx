import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/freebooks'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <Banner/>
            <Freebook />
            <Footer />
        </>
    )
}
