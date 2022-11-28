import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { BsPersonCheck } from 'react-icons/bs';

const Allitems = () => {

    const url = 'http://localhost:5000/addbooks';
    const { data: allproducts = [] ,refetch } = useQuery({
        queryKey: ['addbooks'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })



    const handleApproved=(id)=>{
        fetch(`http://localhost:5000/addbooks/approve/${id}`,{
            method:'PUT',
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                refetch()
                toast.success('Approved')
            }
        })
    }
    return (
        <div className=' flex justify-center items-center mb-10'>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>

                {
                    allproducts.map(allpro => <div key={allpro._id} className="card   bg-base-200 shadow-xl">
                        <figure><img src={allpro.photo} className=' h-80' alt="" /></figure>
                        <div className="card-body text-green-900">
                            <h2 className="card-title">{allpro.bookname}</h2>
                            <h2 className=' font-semibold'>Seller: {allpro.name}</h2>
                            <p>Email: {allpro.email}</p>
                            <p>Location; {allpro.location}</p>
                            <p>{allpro.category_name}</p>
                            <p>{allpro.date}</p>
                            <p>{allpro.price} TK</p>
                            <p>{allpro.condition}</p>
                            <div className="card-actions justify-end">
                                {/* {allpro.status !== 'approve'&& <button onClick={()=>handleApproved(allpro._id)} className="btn btn-xs bg-green-900 text-warning">Approved</button>} */}
                                {allpro.status === 'approve'&& <p  className=" text-2xl text-green-600"><BsPersonCheck></BsPersonCheck></p>}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Allitems;