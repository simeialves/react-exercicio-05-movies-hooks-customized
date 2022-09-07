export const SET_PRODUCT = "SET_PRODUCT";
export const CLEAR_CART = "CLEAR_CART";

export const addProduct = (product) => ({
    type: SET_PRODUCT,
    payload: product,
});

export const clearCart = () => ({
	type: CLEAR_CART
})
