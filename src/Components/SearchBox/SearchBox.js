import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

class SearchBox extends Component {

    constructor(props)
    {
        super(props);

        this.state = {text: ''};
    }

    handleChange(event) {
        let text = event.target.value;
        // console.log("input: " + text);
        this.setState({text});
        this.props.onChange(text);
    }

    render() {
        return (
            <div>
                <input type="text" name="name" value={this.state.text} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}

SearchBox.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default SearchBox;
