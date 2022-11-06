import { configureStore } from "@reduxjs/toolkit";
import intentsSlice from "./intents-slice";
export default configureStore({
  reducer: {
    intents: intentsSlice.reducer,
  },
});
