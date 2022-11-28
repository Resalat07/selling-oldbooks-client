import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const UserOpp = () => {
    const {user}= useContext(AuthContext);


    const handleOpinion = event => {
        
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        
        const opinion = form.opinion.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const opinionAdd = {
           
            name,
            email,
            opinion
        }
        console.log(opinionAdd)

        fetch('http://localhost:5000/opinion', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(opinionAdd)
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
        <div className=' flex justify-center'>

            <div className=' w-96 m-6 border p-7 rounded-xl shadow-2xl'>
            <form onSubmit={handleOpinion} className='grid grid-cols-1 gap-3 mt-10'>
                

                <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                
                <textarea name="opinion" type="text" placeholder="Your Book Condition" className="input w-full h-24 input-bordered" />
                <br />
                {user?.email ? <input className='btn bg-green-900 w-full' type="submit" value="Submit" />
                :
                <Link to='/login' className=' btn  bg-green-800'>Please Login first</Link> }
                
            </form>
            </div>

        </div>
    );
};

export default UserOpp;