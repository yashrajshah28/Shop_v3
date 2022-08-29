import React from 'react'
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'

const Specificproductpage = () => {
    const { id, type } = useParams()

    return (
        <div>
            <Navbar />
            <h1>{id}</h1>
            <h1>{type}</h1>
        </div>
    )
}

export default Specificproductpage
