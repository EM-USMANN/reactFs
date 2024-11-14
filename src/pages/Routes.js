import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Frontend from './Frontend'


const index = () => {
    return (
        <>
            <Header />
           <main>
           <Routes>
                <Route path='/*' element={<Frontend />} />
            </Routes>
           </main>
           <Footer />
        </>
    )
}

export default index