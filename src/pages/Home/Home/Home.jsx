import React from 'react';
import Banner from './Banner';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <h2 className='text-center'>This is home</h2>
        </Container>
    );
};

export default Home;