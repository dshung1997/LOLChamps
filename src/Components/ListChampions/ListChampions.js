import React, { Component } from 'react';
import Champion from '../Champion';
import './ListChampions.css';

class ListChampions extends Component {

    constructor(props)
    {
        super(props);
        this.state = {data: []};
    }

    parseData = (rawData) => {
        let data = [];

        for (const key in rawData) {
            if (rawData.hasOwnProperty(key)) {
                data.push(
                    {
                        name: key,
                        image_url: 'https://ddragon.leagueoflegends.com/cdn/9.6.1/img/champion/'+key+'.png'
                    }
                );
            }
        }

        return data;
    }

    componentDidMount() {
        fetch('https://ddragon.leagueoflegends.com/cdn/9.6.1/data/en_US/champion.json')
        .then(res => res.json())
        .then(response => {
            let parsedData = this.parseData(response.data);
            this.setState({data: parsedData});
        })
        .catch(error => console.error('Error:', error));
    }

    render() {

        console.log('State');
        console.log(this.state.data);

        let data = this.state.data;
        let champsComponent = data.map((champ, index) => <Champion key={index.toString()} name={champ.name} image_url={champ.image_url}/>);

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
