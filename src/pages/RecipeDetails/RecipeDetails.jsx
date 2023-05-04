import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';


const RecipeDetails = () => {
    
    return (
        <Container className="py-5">
      <Row>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Img variant="top" src='' />
            <Card.Body>
              <Card.Title>Ashikur rahman</Card.Title>
              <Card.Text>he is a web developer</Card.Text>
              <Card.Text>
                <strong>Likes: </strong>
                100
              </Card.Text>
              <Card.Text>
                <strong>Recipes: </strong>
                rice,meat
              </Card.Text>
              <Card.Text>
                <strong>Years of Experience: </strong>
                20
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <h2 className="text-center mb-4">Ashik's Recipes</h2>
          <Row>
            
              <Col md={4}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>fish fry</Card.Title>
                    <Card.Text>
                      <strong>Ingredients: </strong>
                      fish
                    </Card.Text>
                    <Card.Text>
                      <strong>Cooking Method: </strong>
                      method
                    </Card.Text>
                    <Card.Text>
                      <strong>Rating: </strong>
                      Ratings
                    </Card.Text>
                    <Button variant="primary" className="mr-2">
                      Add to Favorites
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
          
          </Row>
        </Col>
      </Row>
    </Container>
    );
};

export default RecipeDetails;