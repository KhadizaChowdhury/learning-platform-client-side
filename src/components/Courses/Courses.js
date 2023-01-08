import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Courses = () => {
    const CourseDetails = useLoaderData()
    console.log(CourseDetails)
    const { title, image_url, category_id, details } = CourseDetails;
    return (
        <div className='col course-dark'>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <Card ref={ref} className='mb-3'>
                <Card.Img className='img-fluid' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            <p>{details}</p>
                        }
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary">All news in this Category</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;