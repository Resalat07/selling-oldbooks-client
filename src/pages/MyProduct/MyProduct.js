import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import BookModal from '../AddBooks/BookModal';

const MyProduct = () => {
    const {user}= useContext(AuthContext)
    const url = `http://localhost:5000/addbookss?email=${user?.email}`;
    const { data: myproducts = [] ,refetch } = useQuery({
        queryKey: ['addbooks', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdvertise =(id)=>{

        fetch(`http://localhost:5000/addbooks/advertise/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(' Make Admin')
                }
            })


    }


    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/addbooks/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(' Product Deleted')
                }
            })
    }
    return (
        <div>
            <h1 className=' text-green-900 text-4xl font-semibold m-6'>My Product</h1>
            <div className=' m-10'>
                <h3 className=' text-green-900 text-2xl'>Add some product</h3>
                <label
                        
                        htmlFor="book-modal"
                        className="btn bg-green-900 text-white"
                        
                    >Book Add</label>
                    <BookModal></BookModal>
            </div>
            <div className=' flex justify-center items-center'>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10'>
            

            {
                myproducts.map(mypro=><div key={mypro._id} className="card card-compact w-60 h-90 bg-base-200 shadow-xl text-green-900">
                <figure><img src={mypro.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{mypro.bookname}</h2>
                    <p></p>
                    <p>{mypro.price} TK</p>
                    <h1 className='  font-semibold text-warning'>{mypro.sellerBooked}</h1>
                    <div className="card-actions justify-between">
                        {mypro.advertise !=='now' && <button onClick={() => handleMakeAdvertise(mypro._id)} className="btn btn-xs bg-green-900 text-white">Advertise</button>}

                        <button onClick={() => handleDelete(mypro._id)} className=' btn btn-xs btn-warning '> Delete</button>
                    </div>
                </div>
            </div>)
            }

        </div>
        </div>
        </div>
    );
};

export default MyProduct;