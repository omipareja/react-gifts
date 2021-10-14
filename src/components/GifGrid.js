import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { useState,useEffect } from 'react/cjs/react.development';
//import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';
const GifGrid = ({category}) => {

    //const [images,setImages] = useState([])

    const {data:images,loading} = useFetchGifs(category)




    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">

                    {
                        images.map( img =>{
                            return(
                            <GifGridItem
                                    key={img.id}  
                                    {...img}
                            />
                            )
                        })
                    }
            </div>

        </>
    )
}

export default GifGrid