import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    category : [],
}


export const fetchCategory = createAsyncThunk("fetch/category",  async (_, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3030/categories");
        
        const data  = await res.json()

        return data
    } catch(e) {
        return thunkAPI.rejectWithValue(e)
    }
})




 const categotySlice =  createSlice({
    name: "category",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategory.fulfilled, (state, action) => {
            state.category = action.payload
        })
    }
 })


 export default categotySlice.reducer