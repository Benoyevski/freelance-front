import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  role: localStorage.getItem("role"),
  loading: false,
};

export const follow = createAsyncThunk(
  "patch/order",
  async ({ id, orderId }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3030/followOrder/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: id }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const unFollow = createAsyncThunk(
  "patch/orderFollow",
  async ({ orderId, id }, thunkAPI) => {
    try {

      const res = await fetch(`http://localhost:3030/unFollow/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: id }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const acceptFollow = createAsyncThunk('patch/orderFollow', 
async ({ orderId, userId}, thunkAPI) => {
  try {
    console.log(orderId, 'asdasdasdsa');
    const res = await fetch(`http://localhost:3030/accept/${orderId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userId }),
    });
    
    const data = await res.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
    
  }
})

export const fetchOrders = createAsyncThunk(
  "fetch/orders",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/order");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addOrder = createAsyncThunk(
  "add/orders",
  async (
    { creator, price, inner, term, title, location, categoryId },
    thunkAPI
  ) => {
    try {
      const res = await fetch("http://localhost:3030/order", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creator,
          price,
          text: inner,
          workTime: term,
          title,
          location,
          categoryId,
        }),
      });

      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    acceptUser: (state,action)=>{
      state.orders = state.orders.map((item)=>{
        if(item._id === action.payload.orderId){
          item.accepted.push(action.payload.user)
          item.freelancers = []
        }
        return item

      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = false;
      })
      .addCase(fetchOrders.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
        state.loading = false;
      })
      .addCase(follow.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.map((item) => {
          if (item._id === action.payload.order._id) {
            item.freelancers.push(action.payload.user);
          }
          return item;
        });
      })
      .addCase(unFollow.fulfilled, (state, action) => {
        state.loading = false;
        
        state.orders = state.orders.filter((item) => {
          return item.freelancers._id !== action.payload.user._id;
        });
      });
  },
});

export const {acceptUser} = orderSlice.actions

export default orderSlice.reducer;
