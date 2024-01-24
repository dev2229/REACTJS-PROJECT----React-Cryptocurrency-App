import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import cryptoApi from '../services/cryptoApi.js';
import cryptoNewsApi from '../services/cryptoNewsApi.js'

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware,cryptoNewsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
