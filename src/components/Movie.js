import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../actions/cart";

export function Movie({ movieId, movieTitle, overview, img }) {

	const dispatcher = useDispatch();

	return (
		<>
			<div class="conteiner">
				<div class="container-fluid d-flex flex-wrap">
					<div className="card mt-4" id="card">
						<img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/" + img} class="card-img-top" />
						<div className="card-body">
							<h5 class="card-title">{movieTitle}</h5>
							<p class="card-text">{overview}</p>
							<a href={"movie/" + movieId} class="btn btn-primary"> Ver mais</a>
						</div>
					</div>
				</div>

				<button onClick={() => dispatcher(addProduct({ movieTitle, overview }))}>
					Add to cart
				</button>
			</div>
		</>
	)
}
