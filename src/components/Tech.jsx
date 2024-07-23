import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Tech({ data }) {
    const [slide, setSlide] = useState(6);
    useEffect(() => {
        if (window.outerWidth < 400) {
            setSlide(2)
        } else if (window.outerWidth < 800) {
            setSlide(5)
        }
    }, [])
    return (
        <div className="py-10">
            <div className="grid place-items-center my-10">
                <h2 className='text-4xl py-4 px-8 font-semibold moving-border border-4 rounded-xl text-black'>
                    Tech Stack
                </h2>
            </div>
            <div className="">
                <Swiper
                    slidesPerView={slide}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    // navigation={true}
                    centeredSlides={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper bg-white p-4"
                >
                    {
                        data.map((tech, index) => (
                            <SwiperSlide key={index}>
                                <img src={tech}
                                    alt="techstack"
                                    className='w-16 md:w-20 h-16 md:h-20'
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Tech