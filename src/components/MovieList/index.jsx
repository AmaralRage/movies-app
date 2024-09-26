'use client';

import { useEffect, useState } from "react";
import "./index.scss";
import axios from 'axios';
import StarRating from '@/components/StartRating';
import './index.scss'

// export interface MovieType {
//     title: string,
//     poster_path: string,
//     overview: string,
//     vote_average: number,
// }

export default function MovieList() {
    const [movies, setMoveis] = useState([]);

    useEffect(() => {
        getMoveis();
    }, []);
    const getMoveis = () => {
        axios({
            metrod: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '0eb6dd70b6f4a657aff98b9e4e6f6d9d',
                language: 'pt-BR'
            }
        }).then(response => {
            setMoveis(response.data.results)
            console.log(response.data.results)
        })
    }

    return (
        <ul className="movie-list">
            {movies.map((movie) => (
                <li key={movie.id} className="movie-card">
                    <div className="movie-poster">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title}
                        />


                        <div className="movie-infos">
                            <p className="movie-title">{movie.title}</p>
                            <div className="hidden-content">
                                <p className="description">{movie.overview}</p>
                            </div>

                            {/* Aqui você integra o StarRating */}
                            <StarRating rating={movie.vote_average} />


                            <p>{movie.vote_average}</p>

                            <button className="btn-default">
                                Ver mais
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}