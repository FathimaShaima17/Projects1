import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts, getProductById } from "../../Api/Api";


export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const data = await getAllProducts();
  return data;
});

export const fetchProductById = createAsyncThunk("products/fetchById", async (id) => {
  const data = await getProductById(id);
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], selectedProduct: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })
      .addCase(fetchProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })
      .addCase(fetchProductById.pending, (state) => { state.loading = true; })
      .addCase(fetchProductById.fulfilled, (state, action) => { state.loading = false; state.selectedProduct = action.payload; })
      .addCase(fetchProductById.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  }
});

export default productSlice.reducer;
