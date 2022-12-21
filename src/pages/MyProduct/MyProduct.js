import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';


const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const url = `https://buysell-server.vercel.app/addbookss?email=${user?.email}`;
    const { data: myproducts = [], refetch , isRefetching  } = useQuery({
        queryKey: ['addbooks', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdvertise = (id) => {

        fetch(`https://buysell-server.vercel.app/addbooks/advertise/${id}`, {
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


    const handleDelete = (id) => {
        fetch(`https://buysell-server.vercel.app/addbooks/${id}`, {
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










    const handleBook = event => {

        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const category = form.category.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const bookname = form.bookname.value;
        const price = form.price.value;
        const condition = form.condition.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const bookAdd = {
            date,
            category_name: category,
            name,
            email,
            phone,
            location,
            photo,
            bookname,
            price,
            condition
        }
        console.log(bookAdd)

        fetch('https://buysell-server.vercel.app/addbooks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookAdd)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset()
                    toast.success('Book Added Successfully');
                    refetch()

                }
                else {
                    toast.error(data.message);
                }
            })

    }



















    return (
        <div>
            <h1 className=' text-green-900 text-4xl font-semibold m-6'>My Product</h1>
            <div className=' m-10'>
                <h3 className=' text-green-900 text-2xl'>Add some product</h3>
                {/* <label

                    htmlFor="book-modal"
                    className="btn bg-green-900 text-white"

                >Book Add</label>
                <BookModal></BookModal> */}








                <form onSubmit={handleBook} className='grid grid-cols-1 gap-3 mt-10'>
                    <input type="text" name='date' placeholder='Enter Current Date' className="input w-full input-bordered " />
                    <select name="category" className="select select-bordered w-full">

                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Classics">Classics</option>
                        <option value="Mystery">Mystery</option>

                    </select>
                    <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                    <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="bookname" type="text" placeholder="Book Name" className="input w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    <input name="location" type="text" placeholder="Your Location" className="input w-full input-bordered" />
                    <input name="photo" type="text" placeholder="Your Book Image" className="input w-full input-bordered" />
                    <input name="price" type="text" placeholder="Your Book Price" className="input w-full input-bordered" />
                    <textarea name="condition" type="text" placeholder="Your Book Condition" className="input w-full h-24 input-bordered" />
                    <br />
                    <input className='btn bg-green-900 w-full' type="submit" value="Submit" />
                </form>




























            </div>
            <div className=' flex justify-center items-center'>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10'>


                    {
                        myproducts.map(mypro => <div key={mypro._id} className="card card-compact w-60 h-90 bg-base-200 shadow-xl text-green-900">
                            <figure><img src={mypro.photo} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{mypro.bookname}</h2>
                                <p></p>
                                <p>{mypro.price} TK</p>
                                <h1 className='  font-semibold text-warning'>{mypro.sellerBooked}</h1>
                                <div className="card-actions justify-between">
                                    {mypro.advertise !== 'now' && <button onClick={() => handleMakeAdvertise(mypro._id)} className="btn btn-xs bg-green-900 text-white">Advertise</button>}

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