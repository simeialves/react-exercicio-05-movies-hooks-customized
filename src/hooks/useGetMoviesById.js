import { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";

export function useGetMoviesById(movieId) {
	const [movie, setMovie] = useState({});

    useEffect(() => {
        MoviesService.getById(movieId).then(({ data }) => {
            setMovie(data);
        });
    }, []);

    return movie;
}