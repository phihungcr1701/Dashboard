import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './authSlice';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

const store = configureStore({
    reducer: {
        auth: persistedReducer, // Sử dụng persisted reducer cho auth
    },
});
export const persistor = persistStore(store);

// const store = configureStore({
//     reducer: {
//         auth: authSlice.reducer,
//     }
// });

export default store;