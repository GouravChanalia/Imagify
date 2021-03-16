import React from 'react';
import {useEffect, useState} from 'react'
import services from './services'
import Image from './components/Image'
import './style.css'

const App = () => {

    const [images, setImages] = useState([])
    const [query, setQuery] = useState('')

    useEffect( () => {
        services.get_Photos().then( data => {
            console.log(data);
            setImages(data)
        } )
    } , [])

    const handleClick = event => {

        event.preventDefault()

        services.get_Searched_Photos(query).then(data => {
            console.log(data);
            setImages(data.results)
        })
    }

    return (
        <>
        <div className="navbar">
            <p>Imagify</p>
            <div className="search-section">
                <form onSubmit={handleClick}>
                <input type="text" value={query} onChange={ event => setQuery(event.target.value) } placeholder='exp:Cars' />
                <button>Search</button>
                </form>
            </div>
        </div>
        <div className="container" >
            <div className="images-section">
                {
                    images.map( image =>  <Image key={image.id} image={image}/>)
                }
            </div>
        </div>
        </>
    )
}

export default App