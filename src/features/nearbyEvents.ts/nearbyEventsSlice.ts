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

export const fetchNearbyEvents = createAsyncThunk('nearbyEvents/fetch', async () => {
  const res = await axios.get('http://3.17.216.66:4000/events');
  return res.data as Movie[];
});

const nearbyEventsSlice = createSlice({
  name: 'nearbyEvents',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNearbyEvents.pending, state => {
        state.loading = true;
      })
      .addCase(fetchNearbyEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchNearbyEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default nearbyEventsSlice.reducer;
