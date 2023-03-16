import React, { useEffect, useState } from 'react'
import "./Card.css"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from 'axios';
const Card = (props) => {
    const [allProducts, setAllProducts] = useState()
    const [coats, setCoats] = useState()
    const [dress, setDress] = useState()
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=6")
            .then(res =>
                setAllProducts(res.data))
        axios.get("https://fakestoreapi.com/products?limit=9")
            .then(res =>
                setCoats(res.data))
    }, [])
    return (
        <>

            {props.isAllProducts === true && (
                <>
                    {allProducts.map(item => (

                        <div className='col-md-4 col-lg-4 col-sm-12' key={Math.random()}>
                            <div className='card'>
                                <div style={{ height: "55%" }}></div>
                                <p>{item.description}</p>
                                <h3>{item.price}</h3>
                                <div className='icon-collection-container'>
                                    <BsFillArrowRightCircleFill />
                                </div>
                            </div>
                        </div>


                    ))}
                </>


            )}

            {props.isCoats === true && (
                <>
                    {coats.map(item => (

                        <div className='col-md-4 col-lg-4 col-sm-12'>
                            <div className='card'>
                                <div style={{ height: "55%" }}></div>
                                <p>{item.description}</p>
                                <h3>{item.price}</h3>
                                <div className='icon-collection-container'>
                                    <BsFillArrowRightCircleFill />
                                </div>
                            </div>
                        </div>


                    ))}
                </>
            )}
            {props.isCoats === true && (
                <>
                    {allProducts.map(item => (
                        <div className='col-md-4 col-lg-4 col-sm-12'>
                            <div className='card'>
                                <div style={{ height: "55%" }}></div>
                                <p>{item.description}</p>
                                <h3>{item.price}</h3>
                                <div className='icon-collection-container'>
                                    <BsFillArrowRightCircleFill />
                                </div>
                            </div>
                        </div>


                    ))}
                </>
            )}



        </>
    )
}

export default Card