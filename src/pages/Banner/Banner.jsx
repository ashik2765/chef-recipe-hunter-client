import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import chef1 from '../../assets/curosel6.jpg'
import chef2 from '../../assets/curosel4.jpg'
import chef3 from '../../assets/curosel2.jpg'

const Banner = () => {
    return (
        <Container>
            <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-50  mx-auto"
            src={chef1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='text-danger'>First slide label</h3>
            <p className='text-danger'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50  mx-auto"
            src={chef3}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className='text-danger'>Second slide label</h3>
            <p className='text-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={chef2}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 className='text-danger'>Third slide label</h3>
            <p className='text-danger'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </Container>
    );
};

export default Banner;