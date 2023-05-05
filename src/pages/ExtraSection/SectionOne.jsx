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
                    <h3>Wonton Soup</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum pharetra dui, sed consequat urna euismod vel. Nulla facilisi. Nulla suscipit, nisi nec sollicitudin pretium, tortor quam consectetur urna, vel elementum sapien massa nec enim. Aenean pulvinar consequat urna sit amet imperdiet.</p>
                    <button className='btn btn-warning'>View Recipe</button>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-6 col-md-12'>
                <h3>General Tso's Chicken</h3>
                    <p>Wonton soup is a classic Chinese dish that consists of small dumplings made from a thin sheet of dough, typically filled with a mixture of minced pork or shrimp, and served in a savory broth. The broth is usually made from chicken or pork bones, and flavored with garlic, ginger, and soy sauce. Wonton soup is a popular appetizer or light meal in Chinese cuisine, and can be found in many Chinese restaurants around the world. It is often served with sliced green onions and a drizzle of sesame oil.</p>
                    <button className='btn btn-warning'>View Recipe</button>

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