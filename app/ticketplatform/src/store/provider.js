import { createSlice } from "@reduxjs/toolkit";

const providerSlice = createSlice({
    name: "provider",
    initialState: {
        provider: null,
    },
    reducers: {
        setProvider: (state, action) => {
            state.provider = action.payload;
        },
    },
});

export const { setProvider } = providerSlice.actions;
export default providerSlice.reducer;