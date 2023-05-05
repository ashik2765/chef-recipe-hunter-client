import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import customer1 from '../../assets/customer1.jpg'
import customer2 from '../../assets/customer2.png'
import customer3 from '../../assets/customer3.png'

const ExtraSectionTwo = () => {
    return (
        <div>
            <Container className="my-5">
      <h2 className='text-center'>Customer Reviews</h2>
      <Row>
        <Col lg={4} md={6} sm={12} className="my-3">
          <Card>
            <Card.Body>
            <Image className='w-25 h-25' src={customer1} roundedCircle />
              <Card.Title>Guo Meimei</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">5/5 stars</Card.Subtitle>
              <Card.Text>
                "This recipe was amazing! The flavors were perfectly balanced and the instructions were easy to follow. I'll definitely be making this again!"
              </Card.Text>
              <Button variant="warning">Like</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="my-3">
          <Card>
          
            <Card.Body>
            <Image className='w-25 h-25' src={customer2} roundedCircle />
              <Card.Title>Wang Daming</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">4/5 stars</Card.Subtitle>
              <Card.Text>
                "This recipe was good, but it needed a little more spice for my taste. Overall, it was easy to make and tasted great."
              </Card.Text>
              <Button variant="warning">Like</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="my-3">
          <Card>
            <Card.Body>
            <Image className='w-25 h-25' src={customer3} roundedCircle />
              <Card.Title>Zhang Wei</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">4/5 stars</Card.Subtitle>
              <Card.Text>
                "This recipe was good, but it needed a little more spice for my taste. Overall, it was easy to make and tasted great."
              </Card.Text>
              <Button variant="warning">Like</Button>
            </Card.Body>
          </Card>
        </Col>
            </Row>
        </Container>
        </div>
    );
};

export default ExtraSectionTwo;