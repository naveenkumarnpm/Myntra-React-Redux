import { createSlice } from "@reduxjs/toolkit";

const FetchStatus = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, //'PENDING' and DONE
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = FetchStatus.actions;
export default FetchStatus;
