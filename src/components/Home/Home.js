import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useLoaderData } from 'react-router-dom';
import CourseInfo from '../../Shared/CourseInfo/CourseInfo';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';

const Home = () => {
    const courses = useLoaderData();
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
                <Col>
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </div>
    );
};

export default Home;