import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'

function Testimonial() {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex item-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div >
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    Kiran kumar
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />

                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4  text-textColor font-[400]'>
                            "I have taken medical services form them. They treat so well and they are providing
                            the best medical services."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex item-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div >
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    Kiran kumar
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />

                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4  text-textColor font-[400]'>
                            "I have taken medical services form them. They treat so well and they are providing
                            the best medical services."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex item-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div >
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    Kiran kumar
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />

                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4  text-textColor font-[400]'>
                            "I have taken medical services form them. They treat so well and they are providing
                            the best medical services."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex item-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div >
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    Kiran kumar
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />

                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4  text-textColor font-[400]'>
                            "I have taken medical services form them. They treat so well and they are providing
                            the best medical services."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex item-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div >
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    Kiran kumar
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />

                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4  text-textColor font-[400]'>
                            "I have taken medical services form them. They treat so well and they are providing
                            the best medical services."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex item-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div >
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    Kiran kumar
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />

                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4  text-textColor font-[400]'>
                            "I have taken medical services form them. They treat so well and they are providing
                            the best medical services."
                        </p>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerview={3} pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerview: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerview: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerview: 3,
                        spaceBetween: 30,
                    },

                }}
            >
                {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
                {/* <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex item-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div >
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    Kiran kumar
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />

                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 w-[300px] text-textColor font-[400]'>
                            "I have taken medical services form them. They treat so well and they are providing
                            the best medical services."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex item-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div >
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    Kiran kumar
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />

                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 w-[300px] text-textColor font-[400]'>
                            "I have taken medical services form them. They treat so well and they are providing
                            the best medical services."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className="flex item-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div >
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    Kiran kumar
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />

                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 w-[300px] text-textColor font-[400]'>
                            "I have taken medical services form them. They treat so well and they are providing
                            the best medical services."
                        </p>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default Testimonial