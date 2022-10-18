import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "../serverUrl";
const initialState = {
  users: [],
  favorite: [],
  load: false,
  error: null,
};

export const chanprice = createAsyncThunk(
  "patch/price",
  async ({ id, userId, price }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/users/changeprice/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: userId, price }),
      });
      const data = await res.json();
      return { id, userId, price };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const fetchUsers = createAsyncThunk(
  "fetch/user",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`serverUrl/users`);

      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteorders: (state, action) => {
      state.users = state.users.map((item) => {
        if (item._id === action.payload.id) {
          return {
            ...item,
            followOrders: item.followOrders.filter(
              (i) => i._id !== action.payload.orderId
            ),
          };
        }
        return item;
      });
    },
    followFront: (state, action) => {
      state.users = state.users.map((item) => {
        if (item._id === action.payload.id) {
          return item.followOrders.push(action.payload.order);
        }
        return item;
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(chanprice.fulfilled, (state, action) => {
        state.users = state.users.map((item) => {
          if (item._id === action.payload.id) {
            return {
              ...item,
              wallet: Number(item.wallet) - Number(action.payload.price),
            };
          }

          return item;
        });
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.load = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.load = false;
        state.error = null;
      })
      .addCase(fetchUsers.pending, (state, action) => {
        state.load = true;
      });
  },
});
export const { changeprice } = userSlice.actions;
export const { deleteorders } = userSlice.actions;
export const { followFront } = userSlice.actions;
export default userSlice.reducer;
