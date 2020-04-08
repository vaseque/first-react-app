import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container';

const SearchResults = ({ cards }) => ( 
  
  <section className={styles.component}>
    <Container>
      <div>   
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}         
      </div>
    </Container>
  </section >
);
    
SearchResults.propTypes = {
  title: PropTypes.node,
  cards: PropTypes.array,
};

export default SearchResults;