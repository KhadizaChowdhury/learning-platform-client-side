import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RightSideNav.css';

const RightSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://server-site-flame.vercel.app/courses-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h4>All Courses: {categories.length}</h4>
            <div className='course-cat-dark'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideNav;