import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import FetchStatus from "./FetchStatus";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: FetchStatus.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
