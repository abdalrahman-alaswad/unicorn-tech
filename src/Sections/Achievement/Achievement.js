import React from 'react'
import "./Achievement.css"
import LogoLoop from '../../Data/LogoLoop/LogoLoop'

const Achievement = () => {
    return (
        <>
            <div className='container-fluid Achievement-container'>
                <h2>Our Achievement</h2>
                <div className='row '>
                    {LogoLoop.map(item => (
                        <div className='col-md-2 col-lg-2 col-sm-12' key={Math.random()}>
                            <img src={item} alt="logo" />
                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}

export default Achievement