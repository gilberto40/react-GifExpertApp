import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { categories } ) => {
    
    const {loading, data:images} = useFetchGifs( categories);
 
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">  { categories } </h3>
            { loading &&  <p className="animate__animated animate__flash">'Loading...'</p>}
            <div className="card-grid">
                { 
                    images.map( img  => 
                        <GifGridItem 
                        key={ img.id }
                        { ...img }
                        />
                    )
                }
            </div>    
        </>
    )
}
