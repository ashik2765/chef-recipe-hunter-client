import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ExtraSectionTwo = () => {
    return (
        <div>
            <Container className="my-5">
      <h2 className='text-center'>Customer Reviews</h2>
      <Row>
        <Col lg={4} md={6} sm={12} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>John Smith</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">5/5 stars</Card.Subtitle>
              <Card.Text>
                "This recipe was amazing! The flavors were perfectly balanced and the instructions were easy to follow. I'll definitely be making this again!"
              </Card.Text>
              <Button variant="primary">Like</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>Jane Doe</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">4/5 stars</Card.Subtitle>
              <Card.Text>
                "This recipe was good, but it needed a little more spice for my taste. Overall, it was easy to make and tasted great."
              </Card.Text>
              <Button variant="primary">Like</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>Jane Doe</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">4/5 stars</Card.Subtitle>
              <Card.Text>
                "This recipe was good, but it needed a little more spice for my taste. Overall, it was easy to make and tasted great."
              </Card.Text>
              <Button variant="primary">Like</Button>
            </Card.Body>
          </Card>
        </Col>
            </Row>
        </Container>
        </div>
    );
};

export default ExtraSectionTwo;