import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import Pdf from "react-to-pdf";
import NotFound from '../404 _page/NotFound';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';

const ref = React.createRef();

const CourseDetails = () => {
    const CourseDetails = useLoaderData()
    console.log(CourseDetails)
    const { _id, title, image_url, category_id, details } = CourseDetails;
    return (
        <div>
            <Row className='mt-5'>
                <Col lg={10}>
                    <div className='row course-dark justify-content-center'>
                        {
                            _id ?
                            <div className='col-lg-9 col-md-9'>
                                <Card ref={ref} className='mb-3'>
                                    <Card.Img className='img-fluid' variant="top" src={image_url} />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Card.Title>{title}</Card.Title>
                                            <Pdf targetRef={ref} filename="code-example.pdf">
                                                {({ toPdf }) => <button onClick={toPdf}><FiDownload /></button>}
                                            </Pdf>
                                        </div>
                                        <Card.Text>
                                            {<p>{details}</p>}
                                        </Card.Text>
                                        <Link to={`/checkout/${_id}`}><Button variant="secondary">Get premium access</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            : <NotFound></NotFound>
                        }
                    </div>
                </Col>
                <Col>
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </div>

    );
};

export default CourseDetails