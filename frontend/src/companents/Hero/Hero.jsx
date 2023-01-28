import React from 'react'
import './Hero.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
    return (


        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
  
              <div className="hero">
                    <div className="hero-container">
                        <h1>Growing Big Width <br />
                            Musicol Business
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, <br />
                            facere? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Eveniet, porro.
                        </p>
                        <div className="hero-buttons">
                            <button style={{color:"white",backgroundColor:"#28AE60"}} className='first-button'>Our Services</button>
                            <button  style={{color:"white",backgroundColor:"transparent",border:"1px solid white"}}  className='second-button'>See How it work</button>
                        </div>
                    </div>
                </div>
            

            </SwiperSlide>
            <SwiperSlide>
           
             <div className="hero herosecond">
                    <div className="hero-container">
                        <h1>Growing Big Width <br />
                            Musicol Business
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, <br />
                            facere? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Eveniet, porro.
                        </p>
                        <div className="hero-buttons">
                            <button style={{color:"white",backgroundColor:"#28AE60"}} className='first-button'>Our Services</button>
                            <button  style={{color:"white",backgroundColor:"transparent",border:"1px solid white"}}  className='second-button'>See How it work</button>
                        </div>
                    </div>
                </div>

            
            </SwiperSlide>
            <SwiperSlide>
             
               <div className="hero">
                    <div className="hero-container">
                        <h1>Growing Big Width <br />
                            Musicol Business
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, <br />
                            facere? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Eveniet, porro.
                        </p>
                        <div className="hero-buttons">
                            <button style={{color:"white",backgroundColor:"#28AE60"}} className='first-button'>Our Services</button>
                            <button  style={{color:"white",backgroundColor:"transparent",border:"1px solid white"}}  className='second-button'>See How it work</button>
                        </div>
                    </div>
               

               </div>
            </SwiperSlide>
        </Swiper>


    )
}

export default Hero
