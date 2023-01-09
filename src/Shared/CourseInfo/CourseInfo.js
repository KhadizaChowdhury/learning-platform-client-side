import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FiStar } from 'react-icons/fi';
import './CourseInfo.css';

const CourseInfo = (props) => {
    const { course } = props;
    // console.log(course)
    const { _id, title, thumbnail_url, rating } = course;
    return (
        <div className='px-3'>
            <div className='col course-dark'>
                <Card className='mb-3'>
                    <Card.Body>
                        <Card.Img className='thumbnail_img img-fluid' src={thumbnail_url} />
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                    <Card.Footer className='d-flex align-items-center justify-content-between'>
                        <div>
                            <Button href={`/course/${_id}`}>Course Details</Button>
                        </div>
                        <div>
                            <FiStar className='me-2' />{rating.number}
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default CourseInfo;