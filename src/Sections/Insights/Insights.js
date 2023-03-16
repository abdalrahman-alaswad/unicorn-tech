import React from 'react'
import { SecondaryButton } from '../../Components'
import "./Insights.css"


const Insights = () => {
    return (
        <>
            <div className='container-fluid insights-con'>
                <div className='row' >
                    <div className='col-6 insights-col-h2'>
                        <h2>Get Better Insights<br /> from Our Articles</h2>
                    </div>
                    <div className='col-6 insights-col-a'>
                        <SecondaryButton text="See More" />
                    </div>
                </div>
                <div className='row row-margin' style={{ marginBottom: "90px" }}>
                    <div className='col-md-6 col-lg-6 col-sm-12'>
                        <div className="card card-insight">
                            <div className='insight-img-con'>
                                <div className='img'></div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Best Summer Outfit Style</h5>
                                <h6 className='card-date'>14 Feb - Livina Style</h6>
                                <p className="card-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <SecondaryButton text="Explore More" />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-sm-12'>
                        <div className="card card-insight">
                            <div className='insight-img-con'>
                                <div className='img'></div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Best Summer Outfit Style</h5>
                                <h6 className='card-date'>14 Feb - Livina Style</h6>
                                <p className="card-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <SecondaryButton text="Explore More" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row' style={{ marginBottom: "50px" }}>
                    <div className='col-md-6 col-lg-6 col-sm-12'>
                        <div className="card card-insight">
                            <div className='insight-img-con'>
                                <div className='img'></div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Best Summer Outfit Style</h5>
                                <h6 className='card-date'>14 Feb - Livina Style</h6>
                                <p className="card-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <SecondaryButton text="Explore More" />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-sm-12'>
                        <div className="card card-insight">
                            <div className='insight-img-con'>
                                <div className='img'></div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Best Summer Outfit Style</h5>
                                <h6 className='card-date'>14 Feb - Livina Style</h6>
                                <p className="card-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <SecondaryButton text="Explore More" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Insights