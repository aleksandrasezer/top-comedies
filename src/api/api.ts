import axios from 'axios'
import {MovieResponseType} from "../store/movies-reducer";

export const moviesAPI = {
    getMovies() {
        return axios.get<MoviesResponseType>(`https://api.themoviedb.org/3/discover/movie?with_genres=35`, {
            params: {
                api_key: '30681930d9f8a4d49ec75249be9647a1',
                language: 'en_US',
                page: 1,
            }
        })
            .then(res => res.data['results'])
    }
}

//types
type MoviesResponseType = {
    'page': number
    'results': MovieResponseType[]
}
