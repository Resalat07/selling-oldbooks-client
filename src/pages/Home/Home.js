import React from 'react';

import './Home.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Catagori from '../Catagori/Catagori';
import Advertise from '../Advertise.js/Advertise';
import UserOpp from '../UserOpp/UserOpp';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import love from '../../logo/love.svg'
import store from '../../logo/store.svg';
import secure from '../../logo/secure.svg';
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

          <div className=' grid lg:grid-cols-2 sm:grid-col-1'>

            <div className=' flex justify-center items-center lg:p-6'>

              <div className=' p-4'>
                <h1 className=' text-5xl p-4 font-semibold text-green-600'>Find The Book <br /> <span className=' text-orange-600'>You Love</span></h1>
                <p className=' font-semibold p-4'> In this store you can find the book you love to read. </p>
              </div>
            </div>
            <div>
              <img src={love} className='h-72' />
            </div>



          </div>


          <div className=' grid lg:grid-cols-2 sm:grid-col-1'>

            <div className=' flex justify-center items-center lg:ml-6'>

              <div className=' p-4'>
                <h1 className=' text-5xl p-4 font-semibold text-green-600'>Get The Book <br /> <span className=' text-orange-600'>You Want</span></h1>
                <p className=' font-semibold '>  We try to provide you the books your are looking for. </p>
              </div>
            </div>

           
            <div>
              <img src={store} className='h-72' />
            </div>



          </div>


          <div className=' grid lg:grid-cols-2 sm:grid-col-1'>

            <div className=' flex justify-center items-center lg:ml-6'>

              <div className=' p-4'>
                <h1 className=' text-5xl p-4 font-semibold text-green-600'>Provide the best <br /> <span className=' text-orange-600'>security</span></h1>
                <p className=' font-semibold p-4'> We try best to ensure your security. </p>
              </div>
            </div>

           
            <div>
              <img src={secure} className='h-72' />
            </div>



          </div>

        </OwlCarousel>
      </div>

      <h2 className=' text-5xl font-semibold text-center m-12 '>Bo<span className=' text-green-600'>ok Categor</span>ies</h2>


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
                  <h1 className=' text-5xl text-green-600 font-semibold'>Your Opinion </h1><FaQuoteRight className=' text-orange-600 ml-2'></FaQuoteRight>
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