import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'

function Testimonial() {
    const { data: reviews, loading, error } = useFetchData(`${BASE_URL}/reviews`)
    console.log(reviews)
    return (
        <div>

            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerview={3} pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },

                }}
            >

                <>
                    {loading && <Loader />}
                    {error && <Error />}
                    {!loading && !error && (<>
                        {reviews.map((review) => (
                            <SwiperSlide>
                                <div className='py-[30px] px-5 rounded-3'>
                                    <div className="flex item-center gap-[13px]">
                                        <img src={review.user.photo} alt="" className="h-12 w-12 bg-white rounded-full bpatient" />
                                        <div >
                                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                                {review.user.name}
                                            </h4>
                                            <div className="flex items-center gap-[2px]">
                                                {Array(review.rating).fill().map((_, index) => (
                                                    <HiStar key={index} className='text-yellowColor w-[18px] h-5' />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-[16px] leading-7 mt-4 w-[300px] text-textColor font-[400]'>
                                        {`" ${review.reviewText} "`}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </>)}
                </>
            </Swiper>
        </div>
    )
}

export default Testimonial