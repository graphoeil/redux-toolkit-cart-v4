// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	isOpen:false
};

// Slice
const modalSlice = createSlice({
	name:'modal',
	initialState,
	reducers:{
		// Open modal
		openModal:(state) => {
			state.isOpen = true;
		},
		// Close modal
		closeModal:(state) => {
			state.isOpen = false;
		}
	}
});

// Actions export
export const { openModal, closeModal } = modalSlice.actions;

// Reducer export
export default modalSlice.reducer;