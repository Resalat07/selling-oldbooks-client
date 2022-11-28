import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { GridLoader } from 'react-spinners';

const Advertise = () => {
    const url = 'http://localhost:5000/addbooks';
    const { data: allproducts = [] ,isLoading } = useQuery({
        queryKey: ['addbooks'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        <div className=' h-[800px] flex justify-center items-center align-middle'>
            <GridLoader 
        color="#0a7b64"
        size={52}></GridLoader>
        </div>
    }


    console.log(allproducts);
    return (
        <div >
            {allproducts.length !==0 && <h2 className=' text-5xl font-semibold text-center m-10 text-green-600'>Advertise</h2> }
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10 mt-3'>
            
            {
                allproducts.map(product=>product.advertise ==='now'  && product.sellerBooked !=='booked' && <div    className="card card-compact w-80 bg-base-200 shadow-xl">
                <figure><img src={product.photo} className=' h-72' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-900">{product.category_name}</h2>
                    <h2 className="card-title text-green-900">{product.bookname}</h2>
                    <p>{product.date}</p>
                     <p>{product.price} TK</p>
                    
                    
                </div>
            </div>

            
            //     <div key={product._id} className="card card-compact w-80 bg-base-200 shadow-xl">
            //     <figure><img src={product.photo} className=' h-72' alt="" /></figure>
            //     <div className="card-body text-green-900">
            //         <h2 className="card-title">{product.bookname}</h2>
            //         <h2 className=' font-semibold'>Seller: {product.name}</h2>
            //         <p>Email: {product.email}</p>
            //         <p>Location; {product.location}</p>
            //         <p>{product.category_name}</p>
            //         <p>{product.date}</p>
            //         <p>{product.price} TK</p>
            //         <p>{product.condition}</p>
            //         <div className="card-actions justify-end">
                       
            //             {product.status === 'approve'&& <p  className=" text-2xl text-green-600"><BsPersonCheck></BsPersonCheck></p>}
            //         </div>
            //     </div>
            // </div>
            
            )
            }
            
        </div>
        </div>
    );
};

export default Advertise;