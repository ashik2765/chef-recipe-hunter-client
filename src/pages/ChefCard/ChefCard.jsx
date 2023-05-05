import React from 'react';
import './ChefCard.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ChefCard = ({chef}) => {
    const {chef_name,chef_picture,id,likes,number_of_recipes,view_recipes_button,years_of_experience,bio}= chef;

    
    return (
        <div>
             <Card>
        <Card.Img variant="top" src={chef_picture} />
        <Card.Body>
          <Card.Title>{chef_name}</Card.Title>
          
          <Card.Text>
          <strong> Number Of Recipes: </strong>{number_of_recipes}
          </Card.Text>
          <Card.Text>
            <strong>Experience: </strong>{years_of_experience} Years
          </Card.Text>
          <Card.Text>
            {years_of_experience} <strong>Likes</strong>
          </Card.Text>
         
        </Card.Body>
        <Card.Footer>
        <div className='d-flex'>
        <Link to={`/recipe/${id}`}>
        <Button className='flex-grow-1' variant="warning">View Recipes</Button>
        </Link>
        
        

        </div>
        </Card.Footer>
      </Card>
        </div>
    );
};

export default ChefCard;