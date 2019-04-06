import {default as SearchBoxComponent} from './SearchBox.js';
import {filter} from '../../Redux/Actions';
import { connect } from 'react-redux';

// const dispatchFilter = (dispatch, text) => {
//     dispatch(filter(text));
// }

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
    return {
        onChange: (text) => dispatch(filter(text)),
    }
};

export const SearchBox = connect(
    mapStateToProps, 
    mapDispatchToProps
)(SearchBoxComponent);

