import React from 'react';
import { connect } from 'react-redux';

import Anime from './Anime';

const AnimeList = props => {
  const { anime } = props;
  return (
      <div>
          {
              anime.map(item => {
                  return (
                      <Anime key={item.mal_id} anime={item} />
                  )
              })
          }
      </div>
  )
};

const mapStateToProps = state => {
    return {
        anime: state.anime
    }
}

export default connect(mapStateToProps, {})(AnimeList)