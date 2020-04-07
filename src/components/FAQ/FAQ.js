import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { faq } from '../../data/dataStore';

const FAQ = () => (

  <Container>
    <Hero
      titleText={faq.title}
      imageImg={faq.image}
    />
    <h2>{faq.subtitle}</h2>
    <p>{faq.content}</p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.string,
  image: PropTypes.node,
  subtitle: PropTypes.string,
  content: PropTypes.string,
};

export default FAQ;