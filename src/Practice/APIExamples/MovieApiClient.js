import React, {useEffect, useState} from "react";
const MovieApiClient = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() =>
            fetch('http://localhost:4000/api/movies')
                .then(response => response.json())
                .then(movies => setMovies(movies))
        , []);
    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                {
                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>
                            {movie.title} {movie.rating}
                        </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;

