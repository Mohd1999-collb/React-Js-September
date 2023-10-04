import axios from 'axios'
import React, { useState, useEffect } from 'react'

const UnsplashImageDisplay = ({ searchTerm }) => {

    const [images, setImages] = useState([]);
    
    useEffect(() => {
        fetchImage();
    }, [])


    function fetchImage() {
        axios.get("https://api.unsplash.com/search/photos/",
            {
                params: {
                    query: searchTerm || "nature"
                },
                headers: {
                    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
                }
            })
            .then((response) => setImages(response.data.results))
            .catch((error) => console.log(error.message))
    }
    return (
        <div>
            <button type='submit' onClick={fetchImage}>Search</button>
            {
                images.map((image) =>
                    <img src={image.urls.thumb} alt={image.alt_description} style={{ display: 'inline-block', margin: '15px 35px', width: '23.5rem', height: '25rem' }} />
                )
            }

        </div>
    )
}

export default UnsplashImageDisplay