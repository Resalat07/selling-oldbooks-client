
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { useLoaderData } from 'react-router-dom';
import { BsPersonCheck } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

import { GridLoader } from 'react-spinners';



const BooksCategory = () => {
    const { user } = useContext(AuthContext)
    const datas = useLoaderData()



    const { data: myproducts = [], refetch, isLoading } = useQuery({
        queryKey: ['category_name'],
        queryFn: async () => {
            const data = await datas;

            return data;
        }
    })
    if (isLoading) {
        <div className=' h-[800px] flex justify-center items-center align-middle'>
            <GridLoader
                color="#0a7b64"
                size={52}></GridLoader>
        </div>
    }

    console.log(datas);
    console.log(myproducts)


    const handleModal = (event) => {


        event.preventDefault()
        const form = event.target;
        const sellerName = form.name.value;
        const sellerEmail = form.email.value;
        const sellerLocation = form.location.value;
        const sellerPhone = form.phone.value;
        const bookId = form.id.value;

        console.log(bookId);



        const sellerDetails = {
            sellerName,
            sellerEmail,
            sellerLocation,
            sellerPhone,
            sellerBooked: 'booked'

        }

        fetch(`https://buysell-server.vercel.app/addbook/${bookId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sellerDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    refetch()
                    form.reset()

                    toast.success('Booked Successfully');
                }

            })

    }

    const handleReport = (id) => {
        fetch(`https://buysell-server.vercel.app/addbooks/report/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Reported Successfully')
                }
            })

    }









    return (
        <div className=''>
            <div className=' flex justify-center'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10 '>


                    {
                        myproducts.map(product => product.sellerBooked !== 'booked' && <div key={product._id}>
                            {/* The button to open modal */}

                            <div className="card card-compact w-80 bg-base-200 shadow-2xl">
                                <figure><img src={product.photo} className=' mt-3 h-72 rounded-lg' alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-green-600">{product.bookname}</h2>
                                    <p className=' font-semibold text-2xl'>{product.price} Tk.</p>
                                    <div className="card-actions justify-between mt-2">
                                        <div>
                                            {product.report !== 'Reported' && <button onClick={() => handleReport(product._id)} className="btn btn-xs bg-red-700 text-white border-none">Report</button>}
                                        </div>
                                        <div>
                                            {product.status === 'approve' && <p className=" text-2xl text-green-600"><BsPersonCheck></BsPersonCheck></p>}
                                        </div>
                                        {product.status !== 'approve' && <p className=" text-2xl "><BsPersonCheck></BsPersonCheck></p>}
                                        <div>
                                            {product.status === 'approve' && <p className=" "> <label htmlFor="my-modal-6" className="btn btn-xs bg-green-700 border-none">Book Now</label>

                                            </p>}

                                        </div>

                                    </div>
                                </div>
                            </div>




                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">{product.bookname}</h3>
                                    <p className="py-4">{product.condition}</p>
                                    <p className="py-4">{product.location}</p>
                                    <p className="py-4">{product.phone}</p>
                                    <p className="py-4">{product.email}</p>
                                    <p className="py-4">{product.date}</p>
                                    <p className="py-4">{product.price}</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-6" className="btn btn-xs bg-green-900">Book Now</label>
                                    </div>

                                    <div>
                                        <form onSubmit={handleModal} className='grid grid-cols-1 gap-3 mt-10'>


                                            <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                                            <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                                            <input name="id" type="text" defaultValue={product._id} disabled placeholder="Product Id" className="input w-full input-bordered" />
                                            <input name="location" type="text" placeholder="Your Location" className="input w-full input-bordered" />
                                            <input name="phone" type="text" placeholder="Your Phone Number" className="input w-full input-bordered" />
                                            <br />
                                            <input className='btn bg-green-900 w-full' type="submit" value="Submit" />

                                        </form>
                                    </div>
                                </div>
                            </div>







                        </div>)
                    }



                </div>
            </div>
        </div>
    );
};

export default BooksCategory;