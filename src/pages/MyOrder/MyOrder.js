import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyOrder = () => {

    const { user } = useContext(AuthContext)
    const url = `https://buysell-server.vercel.app/addbookk?sellerEmail=${user?.email}`;
    const { data: myOrders = [] } = useQuery({
        queryKey: ['addbookk', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className=' flex justify-center'>
            <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10'>

                {
                    myOrders.map(order => <div className="card w-96 bg-base-200 shadow-2xl">
                        <figure><img src={order.photo} className='h-72 w-48 mt-3' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{order.bookname}</h2>

                            <div className="card-actions justify-end">
                                <button className="btn btn-xs bg-green-800">Pay Now</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default MyOrder;