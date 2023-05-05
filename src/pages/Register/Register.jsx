import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const [Error, setError] = useState()
  const [success, setSuccess] = useState()


  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    setError('')
    setSuccess('')
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError("Password must be 1 letter and 6 character");
      return;
    }
    if ((name, email, password)) {
      createUser(email, password)
        .then(result => {
          const createdUser = result.user;
          console.log(createdUser);
          setSuccess('Registeration Successful')

        })
        .catch(error => {
          setError(error.message);
        })
    }

  }
  return (
    <Container className='w-25 mx-auto mt-5 bg-body-secondary'>
      <h4 className='mt-5'>Please Register</h4>
      <Form onSubmit={handleRegistration}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name" required />

        </Form.Group>
        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Photo URL" required />

        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
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
            {Error}
          </Form.Text>
          <br />
          <Form.Text className="text-success">
            {success}
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