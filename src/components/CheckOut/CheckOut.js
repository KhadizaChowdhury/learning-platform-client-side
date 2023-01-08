import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const getAccess = useLoaderData()
    // console.log(getAccess[0])
    const { _id, title, image_url, category_id, details } = getAccess[0];
    return (
        <div>
            {title}
        </div>
    );
};

export default CheckOut;