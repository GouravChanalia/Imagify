import React from 'react'
import './image.css'

const Image = props => {

    const { urls, description } = props.image

    return <img src={urls.small} alt={description} />

}

export default Image