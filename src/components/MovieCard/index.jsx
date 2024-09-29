// export interface Movie {
//     id: number,
//     title: string,
//     overview: string,
//     poster_path: string,
//     vote_average: string,
// }

import './index.scss';

export default function MovieCard(props) {
    return (
        <li key={props.id} className="movie-card">
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt=""
                />
                <div className='movie-infos'>
                    <p className='movie-title'>
                        {props.title}

                    </p>
                    <div className='hidden-content'>
                        {movie.overview &&
                            <p className="description">
                                {props.overview.length > 100
                                    ? `${movie.overview.substring(0, 100)}...`
                                    : movie.overview
                                }
                            </p>
                        }
                        <p>
                            {props.vote_average}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    )
}
