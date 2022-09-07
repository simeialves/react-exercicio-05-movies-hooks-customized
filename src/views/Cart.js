import { useSelector } from "react-redux";
import { ProductItem } from "../components/ProductItem";
import { Link } from "react-router-dom";

export function Cart() {
    const { products } = useSelector((state) => state.cart);

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            {products.map((p) => (
                <ProductItem productTitle={p.productTitle} price={p.price} />
            ))}
        </>
    );
}
