import React, { useState } from 'react'
import MovieList from './MovieList';
import MovieDisplay from './MovieDisplay';


const ChildToParentProps = () => {
    const [selectedMovie, setSelectedMovie] = useState('');
    return (
        <div className='ChildToParentProps' style={{ textAlign: 'center' }}>
            <MovieList addMovie={setSelectedMovie} />
            <MovieDisplay
                displayMovie={selectedMovie}
            />
        </div>
    )
}

export default ChildToParentProps