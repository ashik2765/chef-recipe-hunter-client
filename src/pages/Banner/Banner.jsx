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
          className="d-block w-100 vh-50"
          src={chef1}
          alt="First slide"
        />
        <Carousel.Caption>
          <Container>
            <h1>Discover Your Next Favorite Recipe</h1>
            <p>Explore our curated collection of mouth-watering dishes from around the world.</p>
            <button className="btn btn-warning">Browse Recipes</button>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-50"
          src={chef2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <Container>
            <h1>Connect with Our Community</h1>
            <p>Share your favorite recipes, join discussions, and get inspired by fellow food lovers.</p>
            <button className="btn btn-warning">Join Now</button>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-50"
          src={chef3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <Container>
            <h1>Create Your Own Masterpiece</h1>
            <p>Get inspired and experiment with your own recipes using our extensive database of ingredients.</p>
            <button className="btn btn-warning">Get Started</button>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Container>);

            
    
};

export default Banner;