import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Badmintion from './Badmintion'
import Bat from './Bat'
import Football from './Football'

const Products = () => {
    return (
        <>

      

            <Routes>
                <Route path='products/bat' element={<Bat />} />
                <Route path='products/football' element={<Football />} />
                <Route path='products/badmintion' element={<Badmintion />} />
            </Routes>

        </>
    )
}

export default Products