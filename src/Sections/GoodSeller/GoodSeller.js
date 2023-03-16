import "./GoodSeller.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Img1 from "../../assets/Images/2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const GoodSeller = () => {
    return (
        <>
            <div className="container good-container">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => { }}
                    onSlideChange={() => { }}
                >
                    <SwiperSlide>
                        <div className="card-good-conatiner container">
                            <div className="row">
                                <div className="col-md-5 col-lg-5 col-sm-12 ">
                                    <div className="img-good-con">
                                        <div className="img"></div>

                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-7 col-sm-12 text-good-col">
                                    <h3>Good Seller!</h3>
                                    <p>I am very happy with the services provided, it is very helpful, starting
                                        from the insight that the company gave from the start that I did not
                                        understand what it was so I got knowledge and made my website
                                        look better</p>
                                    <h4>Anna Saraspova</h4>
                                    <h6>Your Beloved Buyer</h6>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-good-conatiner container">
                            <div className="row">
                                <div className="col-md-5 col-lg-5 col-sm-12 ">
                                    <div className="img-good-con">
                                        <div className="img"></div>

                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-7 col-sm-12 text-good-col">
                                    <h3>Good Seller!</h3>
                                    <p>I am very happy with the services provided, it is very helpful, starting
                                        from the insight that the company gave from the start that I did not
                                        understand what it was so I got knowledge and made my website
                                        look better</p>
                                    <h4>Unicorn Tech</h4>
                                    <h6>Your Beloved Buyer</h6>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-good-conatiner container">
                            <div className="row">
                                <div className="col-md-5 col-lg-5 col-sm-12 ">
                                    <div className="img-good-con">
                                        <div className="img"></div>

                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-7 col-sm-12 text-good-col">
                                    <h3>Good Seller!</h3>
                                    <p>I am very happy with the services provided, it is very helpful, starting
                                        from the insight that the company gave from the start that I did not
                                        understand what it was so I got knowledge and made my website
                                        look better</p>
                                    <h4>Abdalrahman ALaswad</h4>
                                    <h6>Your Beloved Buyer</h6>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <div className='dots' style={{ marginTop: "70px" }}></div>
                </Swiper>

            </div>

        </>
    )
}

export default GoodSeller