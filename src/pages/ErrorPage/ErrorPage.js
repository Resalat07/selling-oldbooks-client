import React from 'react';
import { Link } from 'react-router-dom';
import notf from '../../logo/notfoound.svg'

const ErrorPage = () => {
    return (
        <div>
            <div className=' flex justify-center'>

                <img src={notf} alt="" />

            </div>
            <div className=' flex justify-end'>
                <Link to='/' className=' btn btn-sm bg-green-700 m-10 justify-end'>Go to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;