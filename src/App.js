// Imports
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./store/features/cartSlice";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";

// Component
const App = () => {

	// Store
	const { cartItems } = useSelector((store) => { return store.cart; });
	const { isOpen } = useSelector((store) => { return store.modal; });

	// Dispatch
	const dispatch = useDispatch();

	// Load cart items
	useEffect(() => {
		dispatch(getCartItems());
	}, [ dispatch ]);

	// Calculate totals everytime cartItems change !
	useEffect(() => {
		dispatch(calculateTotals());
	}, [ cartItems, dispatch ]);

	// Return
	return(
		<main>
			{ isOpen && <Modal/> }
			<Navbar/>
			<CartContainer/>
		</main>
	);

};

// Export
export default App;