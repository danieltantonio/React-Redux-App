import React from 'react';
import { connect } from 'react-redux';

import Search from './components/Search';
import AnimeList from './components/AnimeList';

import './App.css';

function App(props) {
  const { anime } = props;
  return (
    <div className="App">
      <h1>Anime Index App</h1>
      <span>-All your info on everything anime-</span>
      <div className='SearchBar-Container'>
        <Search />
      </div>
      <div className='Anime Info'>
        { anime.length > 0 ? <AnimeList /> : 'Use the Searchbar above to search for an anime series. Try searching for: Pokemon.' }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    anime: state.anime,
    error: state.error,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, {})(App);