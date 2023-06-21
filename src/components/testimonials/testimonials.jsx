import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/portfolio1.png'
import AVTR2 from '../../assets/portfolio2.jpg'
import AVTR3 from '../../assets/portfolio3.jpg'
import AVTR4 from '../../assets/portfolio4.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum totam doloremque, excepturi accusamus magni temporibus officiis sapiente dignissimos optio laudantium cum autem? Voluptate, deserunt. Dolores sint accusantium delectus cum?'
  },

  {
    avatar: AVTR2,
    name: 'Katty',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum totam doloremque, excepturi accusamus magni temporibus officiis sapiente dignissimos optio laudantium cum autem? Voluptate, deserunt. Dolores sint accusantium delectus cum?'
  },

  {
    avatar: AVTR3,
    name: 'selina',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum totam doloremque, excepturi accusamus magni temporibus officiis sapiente dignissimos optio laudantium cum autem? Voluptate, deserunt. Dolores sint accusantium delectus cum?'
  },

  {
    avatar: AVTR4,
    name: 'gloria',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum totam doloremque, excepturi accusamus magni temporibus officiis sapiente dignissimos optio laudantium cum autem? Voluptate, deserunt. Dolores sint accusantium delectus cum?'
  },

]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review}, index) =>{
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className='client__avatar'>
                  <img src={avatar}  />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials

{/* i used swiperjs to make the sliding option.......npm install swiper and all from swiperjs.com*/}