import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import PropTypes from 'prop-types';
import axios from 'axios';

const URL = 'https://yts-proxy.now.sh/list_movies.json';

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
    } = await axios.get(URL);
    this.setState({ isLoading: false, movies });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;
