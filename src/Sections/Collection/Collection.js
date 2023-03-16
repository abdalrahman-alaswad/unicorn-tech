import React, { useState } from 'react'
import "./Collection.css"
import { Card, PrimaryButton } from '../../Components';
const Collection = () => {
    const [isAllProducts, setIsAllProducts] = useState(false)
    const [isCoats, setIsCoats] = useState(false)

    const getIsAllProducts = () => {
        setIsAllProducts(true)
        setIsCoats(false)

    }
    const getIsCoats = () => {
        setIsCoats(true)
        setIsAllProducts(false)

    }

    return (
        <>
            <div className='container-fluid collection-con'>
                <h2>Our Premium Collection</h2>
                <ul className="nav justify-content-center collection-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" onClick={() => getIsAllProducts()} >All Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => getIsCoats()}>Coats & Jacket</a>
                    </li>

                </ul>
                <div className='row'>

                    <Card isAllProducts={isAllProducts} isCoats={isCoats} />
                    <div className='button-con'>
                        <PrimaryButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection