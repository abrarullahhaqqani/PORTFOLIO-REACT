import React from 'react'
import './Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import ER from '../../img/ER.png'
import Weather from '../../img/weather_home.png'
import Food from '../../img/food.png'
import Aoss from '../../img/aoss_main.png'
import Student from '../../img/py.png'
import Task from '../../img/task_adder.png'
import Github from '../../img/github.png'
import Live from '../../img/vecteezy_link-flat-on-transparent-background_19787073.png'
import whitelink from '../../img/white-link.png'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Projects = () => {
    const theme=useContext(themeContext);
    const dark=theme.state.Darkmode;
    return (
        <div className="projects" id='Projects'>
            <span style={dark?{color:"white"}:{color:""}}>My Recent Projects</span>
            <Swiper spaceBetween={8} slidesPerView={2.5} grabCursor={true} className='projects-slider'>
                <SwiperSlide className='swiper-slide'>
                    <img src={Food} alt="" className="Project-image" />
                    <div className='Links'>
                        <a href="https://github.com/Nikhil-0088/Recipe_finder" target='_blank'><img src={Github} alt="" className='link' /></a>
                        <a href="https://recipe-finder-snowy.vercel.app/" target='_blank'><img src={dark?whitelink:Live} alt=""  className='Live' style={dark?{transform:"scale(0.6)"}:{transform:""}}/></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={ER} alt="" className="Project-image" />
                    <div className="Links">
                    <a href="https://github.com/Abhinay-c/Hostel_management_system" target='_blank'><img src={Github} alt="" className='link' /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={Weather} alt="" 
                    className="Project-image" />
                    <div className="Links">
                    <a href="https://github.com/Nikhil-0088/weather" target="_blank"><img src={Github} alt="" className='link' /> </a>
                    <a href="https://weather-nikh.onrender.com/" target='_blank'><img src={dark?whitelink:Live} alt=""  className='Live'/></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={Task} alt="" className="Project-image" />
                    <div className="Links">
                    <a href="https://github.com/Nikhil-0088/taskadder" target='_blank'><img src={Github} alt="" className='link' /></a>
                    <a href="https://nikhil-0088.github.io/taskadder/" target='_blank'><img src={dark?whitelink:Live} alt=""  className='Live'/></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={Aoss} alt="" className="Project-image" />
                    <div className="Links">
                    <a href="https://github.com/Nikhil-0088/aoss" target="_blank"><img src={Github} alt="" className='link' /></a>
                     <a href="https://nikhil-0088.github.io/aoss/" target='_blank'><img src={dark?whitelink:Live} alt=""  className='Live'/> </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={Student} alt="" className="Project-image" />
                    <div className="Links">
                    <a href="https://github.com/Nikhil-0088/Student-Data-storage" target='_blank'><img src={Github} alt="" className='link' /></a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Projects
