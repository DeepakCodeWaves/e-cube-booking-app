import { configureStore } from "@reduxjs/toolkit";
import latestMoviesReducer from "../features/latestMovies/latestMoviesSlice";
import upcomingMoviesReducer from "../features/upcomingMovies/upcomingMoviesSlice";
import nearbyEventsReducer from "../features/nearbyEvents.ts/nearbyEventsSlice";
export const store = configureStore({
  reducer: {
    latestMovies: latestMoviesReducer,
    upcomingMovies: upcomingMoviesReducer,
    nearbyEvents: nearbyEventsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
