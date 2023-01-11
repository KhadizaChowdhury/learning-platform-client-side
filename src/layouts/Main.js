import React from 'react';
import './Main.css'
import { Outlet } from 'react-router-dom';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;