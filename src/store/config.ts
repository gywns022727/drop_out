import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import schoolSlice from "./slices/schoolSlice";
import privacySlice from "./slices/privacySlice";
import reasonSlice from "./slices/reasonSlice";
import dropSclice from "./slices/dropSclice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  school: schoolSlice,
  privacy: privacySlice,
  reason: reasonSlice,
  drop: dropSclice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
