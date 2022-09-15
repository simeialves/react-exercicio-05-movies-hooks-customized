import { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";

export function useGetMovies() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		MoviesService.get().then(({ data: { results } }) => {
			setMovies(results);
		});
	}, []);

	return movies;
}