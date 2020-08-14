import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball' ]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            {/* <button onClick={ handleAdd }>boton</button> */}
            <ol>
                {
                    categories.map( categories => 
                        <GifGrid 
                        key={ categories }
                        categories={ categories }
                        />
                    )
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
