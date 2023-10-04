import React, { useState } from 'react'
import UnsplashImageDisplay from './UnsplashImageDisplay'

const UnsplashImagesUsingAxios = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='UnsplashImagesUsingAxios'>
            <input type="text" placeholder='Search the images.....' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />

            <UnsplashImageDisplay searchTerm={searchTerm} />
        </div>
    )
}

export default UnsplashImagesUsingAxios