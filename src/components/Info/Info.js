import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { info } from '../../data/dataStore';

const Info = () => (

  <Container>
    <Hero
      titleText={info.title}
      imageImg={info.image}
    />
    <h2>{info.subtitle}</h2>
    <p>{info.content}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.string,
  image: PropTypes.node,
  subtitle: PropTypes.string,
  content: PropTypes.string,
};

export default Info;