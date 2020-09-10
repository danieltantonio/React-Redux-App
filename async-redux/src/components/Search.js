import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchAnime } from '../store/actions/fetchAnimeAction';

const Search = props => {
    const { fetchAnime } = props;
    const [search, setSearch] = useState('');

    const onSearchChange = e => {
        const { value } = e.target;
        setSearch(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        fetchAnime(search)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onSearchChange} type="text" />
                <button>Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      anime: state.anime
    }
  }

export default connect(mapStateToProps, { fetchAnime })(Search)