import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";
import { getMovies, addMovieFavorite } from "../../actions";
import { getMovieDetail } from '../../actions/index';
export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div className="form">
        <h2>Find your favorite movies</h2>
        <form className="form-container" onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
            </label>
            <input
              placeholder="Search movie..."
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="boton">
            <div>
              <span>Search</span>
            </div>
          </button>
        </form>
        <ul className="lista">
          {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          {
            this.props.movies?.map(m => (
              <div className="portada" key={m.imdbID}>
                <Link to={`/movie/${m.imdbID}`}>
                  <li className="bottomLeft">{m.Title}</li>
                  <img className="img" src={`${m.Poster}`} alt="Poster"></img>
                </Link>
                <button
                  className="boton fav"
                  onClick={() => this.props.addMovieFavorite({
                    Title: m.Title,
                    imdbID: m.imdbID
                  })}>
                  <div>
                    <span>Fav</span>
                  </div>
                </button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
