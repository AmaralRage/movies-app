// export interface Movie {
//     id: number,
//     title: string,
//     overview: string,
//     poster_path: string,
//     vote_average: string,
// }

export default function MovieCard(props) {
    return (
        <li key={props.id} className="movie-card">
            <p>
                {props.title}

            </p>
            <p className="description">
                {props.overview}
            </p>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
            />
            <p>
                {props.vote_average}
            </p>
        </li>
    )
}
