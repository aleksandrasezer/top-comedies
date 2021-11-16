import React, {ChangeEvent, useEffect, useState} from "react";
import {Movie} from "../movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {fetchMovies, setSearchText, setSorting} from "../../store/movies-reducer";
import s from './Main.module.css'
import ghLogo from '../../assets/github-logo.png'

export const Main = () => {

    const dispatch = useDispatch()
    const {movies, sortDirection, searchText} = useSelector((state: RootState) => state.main)
    const [searchInput, setSearchInput] = useState<string>('')

    const sortUp = () => {
        dispatch(setSorting('up'))
    }
    const sortDown = () => {
        dispatch(setSorting('down'))
    }
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
        setSearchInput(e.currentTarget.value)
    const onSearch = () => {
        dispatch(setSearchText(searchInput))
        setSearchInput('')
    }

    let moviesToDisplay = movies
    if (sortDirection === 'down') {
        moviesToDisplay = movies.sort((a, b) => b.vote_average - a.vote_average)
    }
    if (sortDirection === 'up') {
        moviesToDisplay = movies.sort((a, b) => a.vote_average - b.vote_average)
    }
    moviesToDisplay = moviesToDisplay.filter(m => m.title.toLowerCase().search(searchText.toLowerCase()) >= 0)


    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch, movies])

    return (
        <div>
            <div className={s.header}>TOP-COMEDIES</div>
            <div className={s.sortArea}>
                <div>Sort by rating:
                    <button onClick={sortUp} disabled={sortDirection === 'up'}>low to high</button>
                    <button onClick={sortDown} disabled={sortDirection === 'down'}>high to low</button>
                </div>
                <div>
                    <input onChange={onInputChange} value={searchInput}/>
                    <button onClick={onSearch}>search</button>
                </div>
            </div>
            <div className={s.moviesContainer}>
                {moviesToDisplay.map(m => <Movie
                    key={m.id}
                    title={m.title}
                    posterPath={m.poster_path}
                    overview={m.overview}
                    score={m.vote_average}/>
                )}
            </div>
            <div className={s.footer}>
                <a href='https://github.com/aleksandrasezer'>
                    <img src={ghLogo} alt='gh-logo'/>
                    Aleksandra Sezer</a>
            </div>
        </div>
    )
}