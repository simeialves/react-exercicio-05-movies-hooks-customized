import { MoviesList } from "../components/MoviesList";
import { useGetMovies } from "../hooks/useGetMovies";

export function Home() {
	const movies = useGetMovies();

	return (
		<div className="App">
			<MoviesList movies={movies} />
		</div>
	);
}
