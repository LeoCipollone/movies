import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id)
  }

  render() {
    return (
      <div className="container">
        <h3 className="title">{this.props.movie.Title}</h3>
        <div className="caja">
          <img className="img" src={`${this.props.movie.Poster}`} alt="Poster"></img>
          <div className="details">
            <p className="description">{this.props.movie.Plot}</p>
            <p>Genre: {this.props.movie.Genre}</p>
            <p>imdbRating: {this.props.movie.imdbRating}</p>
            <p>Released: {this.props.movie.Released}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetail
  }
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);