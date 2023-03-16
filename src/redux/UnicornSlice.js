import { createSlice } from "@reduxjs/toolkit";


const unicornSlice = createSlice({
    name: "unicornSlice",
    initialState: {
        status: "idle",
        Products: [],
        errorMessage: "",
    },
    reducers: {

    },
    // extraReducers: {
    //     [getProduct.pending]: (state, action) => {
    //         state.status = "loading";
    //     },
    //     [getProduct.fulfilled]: (state, action) => {
    //         state.Products = action.payload;
    //         state.status = "fulfilled";
    //     },
    //     [getProduct.rejected]: (state, action) => {
    //         state.status = "error";
    //         state.errorMessage = "Could not fetch data. Please refresh to try again."
    //     },
    // },


})
// export const { halland } = unicornSlice.actions
// export default misrajTableSlice.reducer
const { actions, reducer } = unicornSlice;
export default reducer