import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import './index.scss'; // Importando o arquivo de estilo

interface Props {
    rating: number; // Define a propriedade de tipo corretamente
}

export default function StarRating(props: Props) {
    const numStars = Math.round(props.rating / 2); // Converte a nota em estrelas
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < numStars) {
            stars.push(<RiStarSFill key={i} className="star filled" />); // Adiciona estrela cheia
        } else {
            stars.push(<RiStarSLine key={i} className="star" />); // Adiciona estrela vazia
        }
    }

    return <div className="movie-rate">{stars}</div>; // Retorna as estrelas geradas dentro de uma div com className
}
