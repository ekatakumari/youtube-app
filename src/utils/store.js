import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import searchSlice from "./searchSlice.js";
import chatSlice from "./chatSlice.js"
const store= configureStore({
  reducer:{
    app:appSlice,
    search:searchSlice,
    chat:chatSlice
  }
})
export default store;