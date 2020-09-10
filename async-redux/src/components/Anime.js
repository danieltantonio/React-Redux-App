import React from 'react';

const Anime = props => {
    const { anime } = props;
    return (
        <div>
            <div className='Picture-Container'>
                <img src={anime['image_url']} />
            </div>
        </div>
    )
}

export default Anime;