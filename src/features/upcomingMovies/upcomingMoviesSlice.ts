import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type Movie = {
  _id: string;
  name: string;
  imageUrl: string;
}

interface UpcomingMoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: UpcomingMoviesState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchupcomingMovies = createAsyncThunk('upcomingMovies/fetch', async () => {
  const res = await axios.get('http://3.17.216.66:4000/upcomingMovies');
  return res.data as Movie[];
});

const upcomingMoviesSlice = createSlice({
  name: 'upcomingMovies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchupcomingMovies.pending, state => {
        state.loading = true;
      })
      .addCase(fetchupcomingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchupcomingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default upcomingMoviesSlice.reducer;
