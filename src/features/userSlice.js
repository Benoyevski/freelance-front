import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  favorite: [],
  load: false,
  error:null
};

export const fetchUsers = createAsyncThunk("fetch/user", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3030/users")

    const data = await res.json();
    if(data.error){
      return thunkAPI.rejectWithValue(data.error)
  }
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.rejected, (state, action) => {
     
      state.error = action.payload
      state.load = false   
    })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.load = false;
        state.error = null
      })
      .addCase(fetchUsers.pending, (state, action) => {
        state.load = true;
      })      
  },
});

export default userSlice.reducer;
