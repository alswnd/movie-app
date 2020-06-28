import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';

const URL_SORT_BY_RATING = 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(URL_SORT_BY_RATING);
    this.setState({ isLoading: false, movies });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div>
        <Movie id={1} year={2} title={'this '} />

        {isLoading ? "Loading..." :
          movies.map(movie => {
            return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
          })}
      </div>
    );
  }
}

export default App;
