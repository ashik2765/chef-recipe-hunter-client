import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='w-25 mx-auto mt-5 bg-body-secondary'>
      <h4 className='mt-5'>Please Register</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Photo URL" required />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
          <br />
          <Form.Text className="text-success">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Button className='w-100' variant="primary" type="submit">
         Register
        </Button>
        <Form.Text className="text-success">
        Have an Account?
            <Link className='ps-2' to="/login">Login</Link>
          </Form.Text>
       
      </Form>
    </Container>
    );
};

export default Register;