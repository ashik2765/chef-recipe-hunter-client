import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container fluid className="bg-dark text-white py-4 mt-2">
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h4>About Us</h4>
            <p className="m-0">Tabbakh is a community-driven recipe sharing platform, created by food lovers for food lovers. Our mission is to inspire home cooks to try new recipes and techniques, and share their own culinary creations with others.</p>
          </Col>
          <Col md={4} className="text-center">
            <h4>Follow Us</h4>
            <div className="d-flex justify-content-center justify-content-md-center">
              <a href="https://www.facebook.com" className="text-white mx-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com" className="text-white mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.twitter.com" className="text-white mx-2">
                <FaTwitter size={24} />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h4>Contact Us</h4>
            <p className="m-0">Email: info@tabbakh.com</p>
            <p className="m-0">Phone: +1 (555) 123-4567</p>
            <p className="m-0">Address: 123 Main St,china</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center my-3">
            <p className="m-0">&copy; 2023 Chef's Recipes. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    );
};

export default Footer;