import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Image, Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const RecipeDetails = () => {
  const chefdata = useLoaderData();
  const [clicked1,setClicked1]= useState(false)
  const [clicked2,setClicked2]= useState(false)
  const [clicked3,setClicked3]= useState(false)
  
  const { chef_name, chef_picture,likes, years_of_experience, bio, ingredients, instructions,recipe1,recipe2,recipe3,Ratings } = chefdata;

  const handleAddFavorite1 = ()=>{
    setClicked1(true)
  }
  const handleAddFavorite2 = ()=>{
    setClicked2(true)
  }
  const handleAddFavorite3 = ()=>{
    setClicked3(true)
  toast.success('Added to favorites!', { position: toast.POSITION.BOTTOM_RIGHT });
  }
  return (
    <div>
      <div>
        <Container className="banner">
          <Row>
            <Col lg={6}>
              <Image src={chef_picture} fluid />
            </Col>
            <Col lg={6} className="d-flex flex-column justify-content-center align-items-center">
              <div className="info-card text-center">
                <h2>{chef_name}</h2>
                <p>{bio}</p>
                <p><strong>{likes} Likes</strong></p>
                <p><strong>Experience:</strong>{years_of_experience}Years</p>
                <p><strong>Recipes:</strong> {recipe1},{recipe2},{recipe3}</p>
                <Button variant="warning" size="lg">Follow</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
     <Container className='pt-5'>
      <h2 className='text-center px-4'>Chef's Special</h2>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>{recipe1}</th>
          <th>{recipe2}</th>
          <th>{recipe3}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Ingredients:</strong> {ingredients}</td>
          <td><strong>Ingredients:</strong> {ingredients}</td>
          <td><strong>Ingredients:</strong> {ingredients}</td>
        </tr>
        <tr>
          <td><strong>Cooking Method: </strong> {instructions}</td>
          <td><strong>Cooking Method: </strong> {instructions}</td>
          <td><strong>Cooking Method: </strong> {instructions}</td>
        </tr>
        <tr>
          <td><strong>Ratings: </strong> {Ratings}</td>
          <td><strong>Ratings: </strong> {Ratings}</td>
          <td><strong>Ratings: </strong> {Ratings}</td>
        </tr>
        <tr>
          <td><Button onClick={handleAddFavorite1} disabled={clicked1}>Add Favorite</Button></td>
          <td><Button onClick={handleAddFavorite2} disabled={clicked2}>Add Favorite</Button></td>
          <td><Button onClick={handleAddFavorite3} disabled={clicked3}>Add Favorite</Button></td>
        </tr>
      </tbody>
    </Table>
     </Container>
      </div>

    </div>
  );
};

export default RecipeDetails;