import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {
    const { data: images, loading  } = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {!loading &&

                <div className='card-grid'>
                    {
                        images.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img} />

                        ))
                    }
                </div>
            }
            {loading &&
                <p>Cargando ...</p>
            }
        </>
    )
}

export default GifGrid

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}