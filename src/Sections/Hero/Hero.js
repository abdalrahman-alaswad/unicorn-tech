import React from 'react'
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton'
import "./Hero.css"

const Hero = () => {
    return (
        <>
            <div className='container-fluid hero-con'>
                <div className='row row-con'>
                    <div className='col-md-6 col-lg-6 col-sm-12'></div>
                    <div className='col-md-6 col-lg-6 col-sm-12 text-con'>
                        <h1>Your Premium Sound, Unplugged!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <PrimaryButton />
                    </div>
                </div>


            </div>
        </>
    )
}

export default Hero