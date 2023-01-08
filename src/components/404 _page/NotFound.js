import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-dark d-flex align-items-center' style={{ "height": "100vh" }}>
            <div className='container text-center'>
                <h1 className='text-white'>404</h1>
                <button type="button" class="btn btn-warning">Sorry! Page not Found...</button>
                <div className='mt-3'>
                    <Link to={'/'}><button type="button" class="btn btn-success">Go to Home Page</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;