// Imports
import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../utils/icons";

// Component
const Navbar = () => {

	// Store
	const { amount } = useSelector((store) => { return store.cart; });

	// Return
	return(
		<nav>
			<div className="nav-center">
				<h3>Redux Toolkit</h3>
				<div className="nav-container">
					<CartIcon/>
					<div className="amount-container">
						<p className="total-amount">{ amount }</p>
					</div>
				</div>
			</div>
		</nav>
	);

};

// Export
export default Navbar;