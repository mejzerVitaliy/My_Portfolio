import { createSlice } from "@reduxjs/toolkit";

export const OpenModalSlice = createSlice({
    name: 'OpenModal',
    initialState: false,
    reducers: {
        toggleModal: (state) => {
            state = !state
        }
    }
})

export const { toggleModal } = OpenModalSlice.actions
export default OpenModalSlice.reducer