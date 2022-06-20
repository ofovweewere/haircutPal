import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  let {loading, products, setLoading} = useFetch(url);
  //console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
      {/* <button onClick={()=>{loading=!loading;setLoading(loading)}}>Click me</button> */}
    </div>
  )
}

export default Example
