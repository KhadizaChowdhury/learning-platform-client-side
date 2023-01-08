import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseInfo from '../../Shared/CourseInfo/CourseInfo';
import NotFound from '../404 _page/NotFound';

const Category = () => {
    const catCourses = useLoaderData()
    return (
        <div>
            {
                catCourses.length > 0 ?
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
                : <NotFound></NotFound>
            }

        </div>
    );
};

export default Category;