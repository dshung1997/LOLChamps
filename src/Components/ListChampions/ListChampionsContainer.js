import {default as ListChampionsComponent} from './ListChampions.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        data: state.champs.data,
    }
};

const mapDispatchToProps = null;
// dispatch => {
//     return {
//         onChange: (text) => dispatch(filter(text)),
//     }
// };

export const ListChampions = connect(
    mapStateToProps, 
    mapDispatchToProps
)(ListChampionsComponent);