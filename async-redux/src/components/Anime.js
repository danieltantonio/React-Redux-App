import React from 'react';

const Anime = props => {
    const { anime } = props;
    return (
        <div>
            <div className='Left-Container'>
                <div className='Picture-Container'>
                  <img src={anime['image_url']} />
                </div>
                <div className='AnimeInfo-Container'>
                  <h3>{anime.title}</h3>
                  <p>Year: <span>{new Date(anime['start_date']).getFullYear()}</span></p>
                  <p>Type: <span>{anime.type}</span></p>
                  <p>Rated: <span>{anime.rated}</span></p>
                  <p>Score: <span>{anime.score}</span></p>
                </div>
            </div>
            <div className='AnimeSynopsis-Container'>
                <h4>Synopsis</h4>
                <p>{anime.synopsis}</p>
            </div>
            <hr />
        </div>
    )
}

export default Anime;