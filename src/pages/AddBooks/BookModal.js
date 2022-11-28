import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookModal = () => {
    const {user}= useContext(AuthContext);
    
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
            category_name:category,
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

        fetch('http://localhost:5000/addbooks', {
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
                    
                }
                else{
                    toast.error(data.message);
                }
            })

    }
    return (
        <div>
            <div>
            <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                   
                    <form onSubmit={handleBook} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" name='date' placeholder='Enter Current Date'  className="input w-full input-bordered " />
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
            </div>
        </>
            </div>
            
        </div>
    );
};

export default BookModal;