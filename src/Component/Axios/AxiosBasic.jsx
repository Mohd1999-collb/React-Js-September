import axios from 'axios'
import React, { useState } from 'react'

const AxiosBasic = () => {

  const [images, setImages] = useState([]);

  function fetchData() {

    /**Syntax of Axios 
     * 
     *     axios.get( 
     * 
     *    "linkUrl",
     * 
     *     body : {},
     * 
     *     params : {},
     *     
     *     headers : {} 
     * 
     *     )
    */

    axios.get("https://dummyjson.com/products")
      .then((response) => setImages(response.data.products))
      .catch((error) => alert(error.message))

    /*Axios using try catch block first we make the function async function*/
    // try {
    //   const response = await axios.get("https://dummyjson.com/products");
    //   setImages(response.data.products);
    // } catch (error) {
    //   alert(error.message);
    // }
  }
  return (
    <div className='AxiosBasic'>
      <button type='submit' onClick={fetchData}>See The Product Image</button>
      {
        images.map((products) =>
          products.images.map((imageUrl) => <img src={imageUrl} alt="productImage" style={{ display: 'inline-block', margin: '15px 35px', width: '23.5rem', height: '25rem' }} />
          )
        )
      }

    </div>
  )
}

export default AxiosBasic