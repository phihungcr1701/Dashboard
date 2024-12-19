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
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Bỏ qua kiểm tra tuần tự hóa cho các hành động redux-persist
            },
        }),
});
export const persistor = persistStore(store);

export default store;