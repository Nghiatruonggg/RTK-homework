import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialValue = {
  items: [],
  loading: false,
  error: null,
};

const listItems = createAsyncThunk(
  "listItems",
  async (listData, { rejectedWithValue }) => {
    try {
      const res = await axios.get(
        "https://fhplfd-3000.csb.app/mobile-products"
      );
      return res.data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

const createItems = createAsyncThunk(
  "createItems",
  async (newData, { rejectedWithValue }) => {
    const {name, mainImage} = newData;

    try {
      const res = await axios.post(
        "https://fhplfd-3000.csb.app/mobile-products",
        {
          name,
          mainImage
        }
      );
      return res.data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(listItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(listItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(listItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    
    builder
      .addCase(createItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload)
      })

      .addCase(createItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default cartSlice.reducer;
export { listItems, createItems };
