import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReadHero = createAsyncThunk(
  'home/fetchReadHero',
  async (arg, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `https://grupomarquina.pe/api/sliders`
      };
      const { data } = await axios(options);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);


export const pruebaApi = createAsyncThunk(
    'home/pruebaApi',
    async (arg, { rejectWithValue }) => {
      try {
        const options = {
          method: 'GET',
          url: `https://grupomarquina.pe/api/productos`
        };
        const { data } = await axios(options);
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.error);
      }
    }
  );

  export const fetchCategorie = createAsyncThunk(
    'home/fetchCategorie',
    async (arg, { rejectWithValue }) => {
      try {
        const options = {
          method: 'GET',
          url: `https://grupomarquina.pe/api/categorias`
        };
        const { data } = await axios(options);
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.error);
      }
    }
  );

const initialState = {
  loading: false,
  error: {},
  heroProducts: [],
  products: [],
  categories: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReadHero.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadHero.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.heroProducts = payload;
    });
    builder.addCase(fetchReadHero.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.heroProducts = [];
    });
    builder.addCase(pruebaApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(pruebaApi.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.products = payload;
    });
    builder.addCase(pruebaApi.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.products = [];
    });
    builder.addCase(fetchCategorie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategorie.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.categories = payload;
    });
    builder.addCase(fetchCategorie.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.categories = [];
    });
  }
});

// export const { } = homeSlice.actions;

export default homeSlice.reducer;