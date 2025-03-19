import { configureStore } from '@reduxjs/toolkit';
import contract from './contract';
import provider from './provider';

export const store =  configureStore({
    reducer: {
        contract: contract,
        provider: provider,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        })
});

