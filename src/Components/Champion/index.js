import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import image_akali from '../../Images/Akali.png';

class Champion extends Component {

    // constructor(props)
    // {
    //     super(props);
    // }

    render() {
        return (
            <li>
                <div>
                    <img src={this.props.image_url} alt={this.props.name}/>
                    <span>{this.props.name}</span>
                </div>
            </li>
        );
    }
}

Champion.propTypes = {
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    // visible: PropTypes.bool.isRequired
}

export default Champion;
