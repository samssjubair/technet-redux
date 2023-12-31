import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count: 10
}

const counterSlice= createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state)=>{
            state.count++
        },
        decrement: (state)=>{
            state.count--
        }

    }

})

export default counterSlice.reducer;