import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseInfo from '../../Shared/CourseInfo/CourseInfo';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';

const Category = () => {
    const catCourses = useLoaderData()
    return (
        <div>
            <Row>
                <Col lg={10}>
                    {
                        catCourses.length > 0 ?
                            <div>
                                <h2>This Category has {catCourses.length} Course</h2>
                                <div className='course row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4'>
                                    {
                                        catCourses.map(cat_course =>
                                            <CourseInfo key={cat_course._id}
                                                course={cat_course}></CourseInfo>
                                        )
                                    }
                                </div>
                            </div>
                            : <div>
                                <h2>Sorry! No Course Found</h2>
                            </div>
                    }
                </Col>
                <Col>
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </div>
    );
};

export default Category;