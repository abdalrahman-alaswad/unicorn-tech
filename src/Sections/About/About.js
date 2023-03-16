import React from 'react'
import Img1 from "../../assets/Images/4.jpg"
import { SecondaryButton } from '../../Components'
import "./About.css"

const About = () => {
    return (
        <>
            <div className='container About-container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-sm-12'>
                        <div className='img-con'>
                            <img src={Img1} className="img-fluid" />
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-sm-12 About-col'>
                        <h2>Story about<br />
                            Our Brand</h2>
                        <p>Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company Develop a website by finding a product identity that has value and branding to become
                            a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company</p>
                        <SecondaryButton text="Read full story" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About