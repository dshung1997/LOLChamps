import React, { Component } from 'react';
import './App.css';
import {ListChampions} from '../ListChampions';
import {SearchBox} from '../SearchBox';
import {Provider} from 'react-redux';
import store from '../../store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className='bg-dark'>
                <SearchBox />
                <ListChampions/>
            </div>
        </Provider>
    );
  }
}

export default App;
