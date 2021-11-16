import React, {useEffect} from "react";
import {Movie} from "../movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {fetchMovies, MovieResponseType} from "../../store/movies-reducer";
import s from './Main.module.css'
import ghLogo from '../../assets/github-logo.png'

export const Main = () => {

    const dispatch = useDispatch()
    const movies: MovieResponseType[] = useSelector((state: RootState) => state.main.movies)

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    return (
        <div>
            <div className={s.header}>TOP-COMEDIES</div>
            <div className={s.moviesContainer}>
                {movies.map(m => <Movie
                    key={m.id}
                    title={m.title}
                    posterPath={m.poster_path}
                    overview={m.overview}
                    score={m.vote_average}/>
                )}
            </div>
            <div className={s.footer}>
                <a href='https://github.com/aleksandrasezer'>
                <img src={ghLogo} alt='gh-logo' />
                 Aleksandra Sezer</a>
            </div>
        </div>
    )
}