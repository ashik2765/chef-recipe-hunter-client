import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ChefCard from '../ChefCard/ChefCard';
import './Chef.css';

const Chef = () => {
    const [chefdata,setChefdata] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefdata(data))
    },[])
    console.log(chefdata)
    return (

        <Container className='pt-5'>
  <h2 className='text-center text-bold py-4'>Our Chefs</h2>
  <div className='row'>
    {
      chefdata.map(chef =>
        <div key={chef.id} className='col-lg-4 col-sm-12 mb-4'>
          <ChefCard chef={chef} />
        </div>
      )
    }
  </div>
</Container>
    );
};

export default Chef;