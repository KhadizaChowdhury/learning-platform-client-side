import React from 'react';
import { CarouselItem, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useLoaderData } from 'react-router-dom';
import CourseInfo from '../../Shared/CourseInfo/CourseInfo';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import './Home.css';

const Home = () => {
    const courses = useLoaderData();
    const hero = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            <Row>
                <Col lg={10}>
                    <div>
                        <div className='hero row mt-3 p-5 justify-content-center align-items-center'>
                            <h3>TechTutor Solutions provides top-notch guidance to help you become a web development expert. 
                            </h3>
                        </div>
                        <div className='bg-dark my-5 p-5 text-center text-white row justify-content-center align-items-center'>
                            <h2>About us</h2>
                            <p>Hello everyone!</p>
                            <p>I'm excited to introduce you to WebDev, a JavaScript course business located in Sylhet. WebDev is an intensive course designed to help students learn how to develop web applications from the ground up. We offer a variety of courses, from the basics of HTML and CSS to the more advanced topics of React and ES6. Our mission is to provide an accessible and affordable way for students to learn the fundamentals of web development and acquire the skills needed to succeed in the industry.</p>
                            <p>We understand the importance of providing a quality learning experience, so our instructors are experienced developers who have worked in the industry and can share their knowledge and expertise with our students. Additionally, we aim to create an interactive atmosphere where students can ask questions, practice their skills, and get feedback on their progress in real time.</p>
                            <p>So, if you're looking to take your web development skills to the next level, join us at WebDev and bring your ideas to life!
                            </p>
                        </div>
                        <Carousel swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlaySpeed={10000}
                            autoPlay={true}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px" className='gx-4'>
                            {
                                courses.map(course =>
                                    <CourseInfo key={course._id}
                                        course={course}>
                                    </CourseInfo>
                                )
                            }
                        </Carousel>
                    </div>
                </Col>
                <Col className='ms-3 mt-5'>
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </div>
    );
};

export default Home;