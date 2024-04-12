import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // Assuming userSlice exports the userReducer
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    user: userReducer, // Use the userReducer instead of useReducer
});

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Pass rootReducer as the first argument

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
