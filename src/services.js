import axios from 'axios'

const ACCESS_KEY = process.env.REACT_APP_API_KEY

const basicURL = 'https://api.unsplash.com'

const perPage = 'per_page=30'

const id = `client_id=${ACCESS_KEY}`

const get_Photos = () => {

    const request = axios.get(`${basicURL}/photos/?${perPage}&${id}`)

    return request.then(response => response.data)

}

const get_Searched_Photos = query => {

    const request = axios.get(`${basicURL}/search/photos/?query=${query}&${perPage}&${id}`)
    
    return request.then(response => response.data)

}


const services = {get_Photos, get_Searched_Photos}

export default services