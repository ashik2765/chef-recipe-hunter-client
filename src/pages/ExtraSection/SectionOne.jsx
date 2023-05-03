import React from 'react';
import IMG from '../../assets/curosel5.jpg'
import IMG2 from '../../assets/curosel3.jpg'
import { Container } from 'react-bootstrap';

const SectionOne = () => {
    return (
        
        <Container className='pt-5'>
            <h2 className='text-center text-bold py-4'>Featured Recipes</h2>
            <div className='row'>
                <div className='col-lg-6 col-md-12'>
                    <img
                        className='d-block w-100'
                        src={IMG}
                        alt='Featured Recipe'
                    />
                </div>
                <div className='col-lg-6 col-md-12'>
                    <h3>Spicy Thai Curry Chicken</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum pharetra dui, sed consequat urna euismod vel. Nulla facilisi. Nulla suscipit, nisi nec sollicitudin pretium, tortor quam consectetur urna, vel elementum sapien massa nec enim. Aenean pulvinar consequat urna sit amet imperdiet.</p>
                    <button className='btn btn-primary'>View Recipe</button>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-6 col-md-12'>
                <h3>Spicy Thai Curry Chicken</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum pharetra dui, sed consequat urna euismod vel. Nulla facilisi. Nulla suscipit, nisi nec sollicitudin pretium, tortor quam consectetur urna, vel elementum sapien massa nec enim. Aenean pulvinar consequat urna sit amet imperdiet.</p>
                    <button className='btn btn-primary'>View Recipe</button>

                </div>
                <div className='col-lg-6 col-md-12'>
                   

                    <img
                        className='d-block w-100'
                        src={IMG2}
                        alt='Featured Recipe'
                    />
                </div>
            </div>
        </Container>
    );
};

export default SectionOne;