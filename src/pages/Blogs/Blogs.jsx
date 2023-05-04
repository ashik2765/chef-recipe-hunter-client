import React from 'react';
import { Card, Container } from 'react-bootstrap';
import NavBar from '../Header/NavBar';
import Footer from '../Footer/Footer';

const Blogs = () => {
    return (
        <Container>
            <NavBar></NavBar>
            <Card className='mt-2'>
                <Card.Header>Question-1</Card.Header>
                <Card.Body>
                    <Card.Title>Tell us the differences between uncontrolled and controlled components.

                    </Card.Title>
                    <Card.Text>
                    In React, uncontrolled components are those that handle their own state internally, while controlled components rely on state managed by their parent component. Uncontrolled components are easier to implement and require less code, but provide less control over the form's behavior. Controlled components allow for more precise control and validation of form input, but can be more complex and require more code to manage. Ultimately, the choice between controlled and uncontrolled components depends on the specific needs of the application.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className='mt-2'>
                <Card.Header>Question-2</Card.Header>
                <Card.Body>
                    <Card.Title>How to validate React props using PropTypes

                    </Card.Title>
                    <Card.Text>
                    To validate React props using PropTypes, you can import the PropTypes library and define the expected type and shape of the props in the component's propTypes object. PropTypes provides a range of validators for different data types and structures, such as string, number, boolean, and object. When a prop is passed to the component that does not match the defined type or shape, a warning will be logged in the console.
                    </Card.Text>
                   
                </Card.Body>
            </Card>
            <Card className='mt-2'>
                <Card.Header>Question-3</Card.Header>
                <Card.Body>
                    <Card.Title>Tell us the difference between nodejs and express js.

                    </Card.Title>
                    <Card.Text>
                    Node.js is a server-side JavaScript runtime environment that allows JavaScript code to run on the server. Express.js is a web application framework for Node.js that provides a set of tools and features to build web applications, including middleware, routing, and HTTP request/response handling. Express.js builds on top of Node.js to provide a simpler and more organized way to build web applications.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className='mt-2'>
                <Card.Header>Question-4</Card.Header>
                <Card.Body>
                    <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
                    <Card.Text>
                    A custom hook is a JavaScript function that allows you to reuse logic across multiple React components. Custom hooks enable you to abstract away complex logic, state management, or API calls into a reusable function that can be shared across multiple components. You would create a custom hook to reduce code duplication and improve code maintainability.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Footer></Footer>
        </Container>
    );
};

export default Blogs;