import React, { useRef } from 'react'
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";


export const Scrollhome = () => {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  }

  const Data = [
    {
      img: img1,
      header: 'We missed you',
      par: "Get back on track and achieve your goals. 5–10 minutes a day will do.",
      button: "",
    },
    {
      img: img2,
      header: 'Prep for your IT certificate',
      par: "Explore a future in IT. Start learning toward AWS certification, CompTIA A+ certification, and more.",
      button: "",
    },
    {
      img: img3,
      header: 'AI in Action',
      par: "Get pro tips on how to save time with AI on May 14 from four top Udemy instructors.",
      button: "Register Now",
    }
  ]
  return (
    <div className='w-[70wv] h-[60vh] bg-white mt-0  '>
      <div className='mt-0 h-full pl-[50px] pr-[60px]'>
        <Slider {...Settings}>
          {Data.map((d, index) => (
            <div key={index} className='w-[100%] relative'>
              <img className='h-full w-full ' src={d.img} />
              <div className="text-box " style={{
                position: 'absolute', top: '50%', left: '15%', transform: 'translate(-50%, -50%)',
                textAlign: 'center', width: '350px', height: '150px', backgroundColor: 'white', textOverflow: 'inherit', textWrap: 'wrap', padding: '15px', margin: '10px', marginLeft: '50px'
              }}>
                <h2 className='text-black  font-bold  font-weight-800 text-xl'>{d.header}</h2>
                <p>{d.par}</p>

              </div>
            </div>
          ))}
        </Slider>
      </div>


    </div>
  )
}
