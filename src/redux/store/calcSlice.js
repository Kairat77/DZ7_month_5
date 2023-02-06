import {createSlice} from "@reduxjs/toolkit";

const calcSlice = createSlice({
    name: 'calcSlice',
    initialState: {
        result: null
    },
    reducers: {
        calculate: (state, action) => {
            state.result = action.payload
        }
    }
})

export const {calculate} = calcSlice.actions
export default calcSlice.reducer