import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseInfo from '../../Shared/CourseInfo/CourseInfo';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4'>
            {
                courses.map(course =>
                    <CourseInfo key={course._id}
                        course={course}></CourseInfo>
                )
            }
        </div>
    );
};

export default Home;