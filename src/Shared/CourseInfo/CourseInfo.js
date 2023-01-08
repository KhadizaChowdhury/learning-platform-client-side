import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';
import { FiBookmark, FiStar, FiEye } from 'react-icons/fi';
import './CourseInfo.css'

const CourseInfo = (props) => {
    const { course } = props;
    // console.log(course)
    const { _id, title, thumbnail_url, author, details, rating, total_view } = course;
    const { name, published_date, img } = author;
    return (
        <div className='col course-dark'>
            <Card className='mb-3'>
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <div className='me-3'>
                                <img className='author_img img-fluid' src={img} alt="Author-Img" />
                            </div>
                            <div>
                                <p className='m-0'>{name}</p>
                                <p className='m-0'>{published_date}</p>
                            </div>
                        </div>
                        <div>
                            <FiBookmark className='me-2' />
                            <FaShareAlt />
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img className='thumbnail_img img-fluid' src={thumbnail_url} />
                    <Card.Text>
                        {
                            details?.length > 200 ?
                                <span>{details?.slice(0, 250) + '...'} <Link to={`/course/${_id}`}>Read More</Link></span>
                                :
                                <span>{details}</span>

                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <div><FiStar className='me-2' />{rating.number}</div>
                    <div><FiEye className='me-2' />{total_view}</div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseInfo;