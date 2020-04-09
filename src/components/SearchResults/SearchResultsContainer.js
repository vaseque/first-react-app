import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux.js'; 

const mapStateToProps = (state, props) => {

  const inputString = props.match.params.history;

  return {

    cards: getCardsForSearchResults(state, inputString),
  };
};

export default connect(mapStateToProps)(SearchResults);