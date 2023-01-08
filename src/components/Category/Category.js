import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseInfo from '../../Shared/CourseInfo/CourseInfo';

const Category = () => {
    const catCourses = useLoaderData()
    return (
        <div>
            <h2>This Category has News {catCourses.length}</h2>
            <div className='course row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4'>
                {
                    catCourses.map(cat_course =>
                        <CourseInfo key={cat_course._id}
                        course={cat_course}></CourseInfo>
                    )
                }
            </div>
        </div>
    );
};

export default Category;