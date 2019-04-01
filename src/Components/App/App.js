import React, { Component } from 'react';
import './App.css';
import ListChampions from '../ListChampions';
import SearchBox from '../SearchBox';

class App extends Component {
  render() {
    return (
        <div className='bg-dark'>
            <SearchBox />
            <ListChampions/>
        </div>
    );
  }
}

export default App;
