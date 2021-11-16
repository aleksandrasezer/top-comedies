import React from "react";
import s from './Movie.module.css'

export const Movie = ({title, posterPath, overview, score}: MoviePropsType) => {

    const toolTip:string = overview.length < 140 ? overview : overview.slice(0,139) + '...'

    return(
        <div className={s.movieContainer}>
            <div className={s.title}>
                <b>{title.toUpperCase()}</b>
            </div>
            <div className={s.poster}>
                <span className={s.tooltipText}>{toolTip}</span>
                <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt='poster'/>
                <div className={s.score}>
                    {score}
                </div>
            </div>
        </div>
    )
}

//types
type MoviePropsType = {
    title: string
    posterPath: string
    overview: string
    score: number
}