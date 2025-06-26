import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type Movie = {
  _id: string;
  name: string;
  imageUrl: string;
  rate: number;
  type: string;
  language: string;
}

interface LatestMoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: LatestMoviesState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchLatestMovies = createAsyncThunk('latestMovies/fetch', async () => {
  const res = await axios.get('http://3.17.216.66:4000/latest');
  return res.data as Movie[];
});

const latestMoviesSlice = createSlice({
  name: 'latestMovies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLatestMovies.pending, state => {
        state.loading = true;
      })
      .addCase(fetchLatestMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchLatestMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default latestMoviesSlice.reducer;
