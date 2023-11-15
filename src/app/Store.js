import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import Blogslice from "../components/blogs/blogList/Blogslice";
import { persistStore , persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, Blogslice );
    
const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  /* blog: Blogslice,*/
     [apiSlice.reducerPath]: apiSlice.reducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
const persistor = persistStore(store);
setupListeners(store.dispatch);
export { store, persistor };
