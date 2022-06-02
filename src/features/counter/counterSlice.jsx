import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState: {
        value: 0
    }, 
    reducers : {
        try1: {
            increment : (state) => {
                console.log("Running")
                state.value++;
            }
        }
    }
})

export const newSlice = (state=-10, action) => {
    switch(action.type)  {
        case ("counter/increment"):
            console.log("Running New Slice..");
            return state + 1;
        default:
            return state;
    }
}

export const { try1 } = counterSlice.actions;
console.log("reducer", counterSlice.reducer)
console.log(try1)
export default [counterSlice.reducer, newSlice];