import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const { createUser, updateUser ,providerLogin } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate()
    const handleSignUp = (data) => {
        saveUser(data.name, data.email, data.select)
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.log(error));

            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }


    const googleLogin=()=>{
        providerLogin(new GoogleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err))
    }

    const saveUser = (name, email, select) => {
        const user = { name, email, select };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/');
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center mb-6'>
            <div className='w-96 p-8 border shadow-lg bg-base-200 rounded-lg'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Password must be 8 characters long" },

                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">

                        <select name="category" type='select' {...register("select")} className="select select-bordered w-full mt-3">

                            <option >Buyer</option>
                            <option value="Seller">Seller</option>


                        </select>

                    </div>

                    <input className='btn bg-green-900 w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='pt-3'>Already have an account <Link className='text-primary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>


                <button onClick={googleLogin} className='btn bg-green-900 w-full'>Google  <FaGoogle className='ml-3' /></button>

            </div>
        </div>
    );
};

export default SignUp;