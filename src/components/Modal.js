// Imports
import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/features/cartSlice";
import { closeModal } from "../store/features/modalSlice";

// Component
const Modal = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Confirm clear
	const confirmClear = () => {
		dispatch(clearCart());
		dispatch(closeModal());
	};

	// Cancel clear
	const cancelClear = () => {
		dispatch(closeModal());
	};

	// Return
	return(
		<aside className="modal-container">
			<div className="modal">
				<h4>Remove all items from your cart ?</h4>
				<div className="btn-container">
					<button type="button" className="btn confirm-btn" onClick={ confirmClear }>
						Confirm
					</button>
					<button type="button" className="btn clear-btn" onClick={ cancelClear }>
						Cancel
					</button>
				</div>
			</div>
		</aside>
	);

};

// Export
export default Modal;