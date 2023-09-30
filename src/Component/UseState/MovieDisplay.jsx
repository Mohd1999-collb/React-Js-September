import React from 'react'

const MovieDisplay = ({ displayMovie }) => {
    return (
        <div className="MovieDisplay">
            <hr />
            <hr />
            <h1>Movie Details</h1>

            <h1>{displayMovie.title}</h1>
            <h1>{displayMovie.year}</h1>
            <h1>{displayMovie.runtime}</h1>
            <h1>{displayMovie.genres}</h1>
        </div>
    )
}

export default MovieDisplay