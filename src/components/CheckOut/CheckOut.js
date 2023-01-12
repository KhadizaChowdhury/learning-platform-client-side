import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const getAccess = useLoaderData()
    // console.log(getAccess[0])
    const { _id, title, image_url, category_id, details } = getAccess;
    return (
        <div className='my-5'>
            Course Name: <h4>{title}</h4>
        </div>
    );
};

export default CheckOut;