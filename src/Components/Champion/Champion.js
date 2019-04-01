import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Champion.css';

class Champion extends Component {

    // constructor(props)
    // {
    //     super(props);
    // }

    render() {
        return (
            <li className='li-wrapper'>
                <div className='champ-wrapper'>
                    <img className={'champ-image'} src={this.props.image_url} alt={this.props.name}/>
                    <div>
                        <span className='champ-name'>{this.props.name}</span>
                    </div>
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
