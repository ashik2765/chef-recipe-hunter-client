import React from 'react';
import './ChefCard.css';
import { Button, Card } from 'react-bootstrap';


const ChefCard = ({chef}) => {
    const {chef_name,chef_picture,id,likes,number_of_recipes,view_recipes_button,years_of_experience,bio}= chef;

    const handaleViewDetails =() =>{
        console.log('it is working')
    }
    return (
        <div>
             <Card>
        <Card.Img variant="top" src={chef_picture} />
        <Card.Body>
          <Card.Title>{chef_name}</Card.Title>
          <Card.Text>
            {bio}
          </Card.Text>
          <Card.Text>
           Number Of Recipes: {number_of_recipes}
          </Card.Text>
          <Card.Text>
            Experience: {years_of_experience} Years
          </Card.Text>
          <Card.Text>
            <Button>Add favorite</Button>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <div className='d-flex'>
        <Button onClick={handaleViewDetails} className='flex-grow-1' variant="secondary">View Details</Button>
        

        </div>
        </Card.Footer>
      </Card>
        </div>
    );
};

export default ChefCard;