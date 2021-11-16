import {moviesAPI} from "../api/api";
import {AppThunk} from "./store";


const initState: InitStateType = {
    movies: [],
    sortDirection: 'idle',
    searchText: '',
}

export const moviesReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case 'MAIN/SET-MOVIES':
            return {...state, movies: action.movies}
        case 'MAIN/SET-SORTING':
            return {...state, sortDirection: action.sortDirection}
        case 'MAIN/SET-SEARCH-TEXT':
            return {...state, searchText: action.searchText}
        default:
            return state
    }
}

//action creators
export const setMovies = (movies: MovieResponseType[]) => ({type: 'MAIN/SET-MOVIES', movies}) as const
export const setSorting = (sortDirection: SortDirectionType) => ({type: 'MAIN/SET-SORTING', sortDirection}) as const
export const setSearchText = (searchText: string) => ({type: 'MAIN/SET-SEARCH-TEXT', searchText}) as const


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
    sortDirection: SortDirectionType
    searchText: string
}
export type SortDirectionType = 'idle' | 'down' | 'up'
export type ActionType = ReturnType<typeof setMovies>
    | ReturnType<typeof setSorting>
    | ReturnType<typeof setSearchText>
