import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub,FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <Container className='w-25 mx-auto mt-5'>
      <h4 className='mt-5'>Please Login</h4>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Checkbox">
          <Form.Check type="checkbox" label="Accept Terms And Condition" />
          <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
          <br />
          <Form.Text className="text-success">
            We'll never share your email with anyone else.
          </Form.Text>
          <div className='text-center'>
          <Button className='w-100' variant="outline-secondary"><FaGoogle></FaGoogle><span className='ms-2'>Login With Google</span></Button> 
          <h4 className='text-center'>Or</h4>
          <Button className='w-100' variant="outline-secondary"><FaGithub></FaGithub><span className='ms-2'>Login With Github</span></Button>
          </div>
        </Form.Group>
        <Button className='w-100' variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-success">
          Don't have an Account?
          <Link className='ps-2' to="/register">Register</Link>
        </Form.Text>

      </Form>
    </Container>
  );
};

export default Login;