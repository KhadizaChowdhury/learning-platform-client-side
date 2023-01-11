import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <h2 className='text-center my-5'>Blog Section </h2>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is 'CORS'?</Accordion.Header>
                        <Accordion.Body>
                        CORS (Cross-Origin Resource Sharing) is <b>a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.</b> The same-origin security policy forbids cross-origin access to resources.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using 'firebase'? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            <p>Firebase Authentication <b>provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.</b> It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                            <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be <b>cards, retina scans, voice recognition, and fingerprints.</b></p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How does the private route work?</Accordion.Header>
                        <Accordion.Body>
                            The react private route component <b>renders child components ( children ) if the user is logged in.</b> If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                        <Accordion.Body>
                            <p>Node. js <b>a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests.</b> In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                            <p><b>It is used as backend service where javascript works on the server-side of the application.</b> This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Blog;