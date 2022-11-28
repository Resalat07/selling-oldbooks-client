import React from 'react';
import book from '../../image/book.jpg'
import book2 from '../../image/book3.jpg'
import './Home.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Catagori from '../Catagori/Catagori';
import Advertise from '../Advertise.js/Advertise';
import UserOpp from '../UserOpp/UserOpp';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const Home = () => {
  const options = {
    margin: 20,
    responsiveClass: true,
    loop: true,
    autoplay: true,
    autoHeight: true,


    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,

      }
    },
  };
  return (
    <div className=' '>

      <div>
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          <div className=''><img alt='' className=" rounded-3xl" src={book} /></div>

          <div className=''><img alt='' className=" rounded-3xl" src={book2} /></div>

        </OwlCarousel>
      </div>

      <h2 className=' text-5xl font-semibold text-center m-6'>Bo<span className=' text-green-800'>ok Categor</span>ies</h2>


      <div className=' flex justify-center items-center'>

        <Catagori></Catagori>





      </div>


      <div className='flex justify-center items-center'>

        <Advertise></Advertise>
      </div>
      <div className='flex justify-center items-center'>

        <div className=' grid lg:grid-cols-2 sm:grid-cols-1'>
          <div className=' flex justify-center items-center p-10'>
          <div>
          <div className=' flex justify-center'>
          <div className=' flex'>
          <FaQuoteLeft className=' text-orange-600 mr-2'></FaQuoteLeft>
          <h1 className=' text-5xl text-green-800 font-semibold'>Your Opinion </h1><FaQuoteRight className=' text-orange-600 ml-2'></FaQuoteRight>
          </div>
          </div>
          <p className=' p-10 font-semibold text-green-800 text-center'>Your opinion is very important for us. We always try to improve our quality to give you the best experience</p>
          </div>
          </div>

          <UserOpp></UserOpp>
        </div>
      </div>








    </div>


  );
};

export default Home;