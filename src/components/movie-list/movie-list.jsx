import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import MovieCard from "../movie-card/movie-card";
import movieCardProp from "../../prop-types/movie-card.prop";

const MemoMovieCard = React.memo(MovieCard);

const MovieList = (props) => {

  const {films, activeCard, onMovieCardOver, onMovieCardOut} = props;
  const history = useHistory();

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <MemoMovieCard key ={`${i}-${film.id}`} film={film}
          onMovieCardOver ={onMovieCardOver} onMovieCardOut={onMovieCardOut}
          isVideoPlaying ={activeCard === film.id} history={history} />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(movieCardProp).isRequired,
  activeCard: PropTypes.number.isRequired,
  onMovieCardOver: PropTypes.func.isRequired,
  onMovieCardOut: PropTypes.func.isRequired,
};

export default MovieList;
