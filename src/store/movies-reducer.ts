import {moviesAPI} from "../api/api";
import {AppThunk} from "./store";


const initState: InitStateType = {
    movies: [],
}

export const moviesReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case 'MAIN/SET-MOVIES':
            return {...state, movies: action.movies}
        default:
            return state
    }
}

//action creators
export const setMovies = (movies: MovieResponseType[]) => ({type: 'MAIN/SET-MOVIES', movies}) as const

//thunk
export const fetchMovies = (): AppThunk => {
    return async (dispatch) => {
        const moviesData = await moviesAPI.getMovies()
        dispatch(setMovies(moviesData))
    }
}

//types
export type MovieResponseType = {
    "adult": boolean
    "backdrop_path": string
    "genre_ids": number[]
    "id": number
    "original_language": string
    "original_title": string
    "overview": string
    "popularity": number
    "poster_path": string
    "release_date": string
    "title": string
    "video": boolean
    "vote_average": number
    "vote_count": number
}
export type InitStateType = {
    movies: MovieResponseType[]
}
export type ActionType = ReturnType<typeof setMovies>