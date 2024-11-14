import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Products from './Products'

const Frontend = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='about' element={<About />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='/*' element={<Products />}/>
            </Routes>

           

        </>
    )
}

export default Frontend