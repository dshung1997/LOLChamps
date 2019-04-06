import React, { Component } from 'react';
import Champion from '../Champion';
import './ListChampions.css';

class ListChampions extends Component {

    constructor(props)
    {
        super(props);
        this.state = {data: []};
    }

    // componentDidMount() {
        
    // }

    render() {

        // console.log('State');
        // console.log(this.props.data);

        let data = this.props.data;
        let champsComponent = data.map((champ, index) => <Champion key={index.toString()} name={champ.name} image_url={champ.image_url} visible={champ.visible}/>);

        return (
            <div>
                <ul className='list-champs-wrapper'>
                    {champsComponent}
                </ul>
            </div>
        );
    }
}

export default ListChampions;
