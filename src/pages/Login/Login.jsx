import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub,FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider';


const Login = () => {
  const {signIn}= useContext(AuthContext);
  const navigate = useNavigate();

  const [successful,setSuccessful] = useState();
  const [Error,setError] = useState();

  const handleLogin = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)

    signIn(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      setSuccessful('login successful')
      navigate('/chef')
    })
    .catch(error =>{
      
      setError(error.message);
    })

  }
  
  return (
    <Container className='w-25 mx-auto mt-5'>
      <h4 className='mt-5'>Please Login</h4>
      <Form onSubmit={handleLogin}>
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
            {Error}
          </Form.Text>
          <br />
          <Form.Text className="text-success">
            {successful}
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