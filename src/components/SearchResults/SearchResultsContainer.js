import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux.js'; 

const mapStateToProps = (state, props) => {

  const inputString = props.match.params.history;
  const filteredCards = state.cards.filter(card => new RegExp(inputString, 'i').test(card.title));
  const cardParams = filteredCards[0] || {};

  return {
    ...cardParams,
    cards: getCardsForSearchResults(state, inputString),
  };
};

export default connect(mapStateToProps)(SearchResults);