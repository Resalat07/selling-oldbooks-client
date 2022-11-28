import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const {signIn}= useContext(AuthContext)
    const { register, formState: {errors}, handleSubmit } =useForm();
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('Login Successfully.')
                navigate(from,{replace: true});
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>


                <div className='w-96 p-6 border shadow-lg bg-base-200 rounded-lg'>

                    <h2 className='text-xl text-center'>Login</h2>

                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="text"
                                {...register("email", {
                                    required: "Email Address is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: 'Password must be 8 characters longer' }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                           
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn bg-green-900 w-full mt-3' value="Login" type="submit" />
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>


                    <p className='mt-3'>New to <Link className='text-primary' to="/signUp">Create new Account</Link></p>


                    
                </div>
            </div>

        </div>
    );
};

export default Login;