import "./Slider.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ImagesLoop from '../../Data/ImagesLoop/ImagesLoop';




const Slider = () => {

    return (
        <>
            <Swiper className='Swiper'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => { }}
                onSlideChange={() => { }}
            >
                {ImagesLoop.map(item => (
                    <SwiperSlide className="SwiperSlide" key={item}>
                        <img src={item} />
                    </SwiperSlide>
                ))}
                <div className='dots' style={{ marginTop: "70px" }}></div>
            </Swiper>
        </>
    )
}

export default Slider