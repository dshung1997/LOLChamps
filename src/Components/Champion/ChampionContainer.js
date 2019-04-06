import * as ChampionComponent from './Champion.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

const Champion = connect(
    mapStateToProps, 
    mapDispatchToProps
)(ChampionComponent);

export default Champion;