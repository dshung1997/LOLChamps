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
            <div>
                <img src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/signup-na-experiment/en_US/2575c5db9a919c320d1668827de0dead00ecab97/assets/assets/lol-logo.png' className='image-lol' alt='logo LOL'/>
                <SearchBox />
                <ListChampions/>
            </div>
        </Provider>
    );
  }
}

export default App;
