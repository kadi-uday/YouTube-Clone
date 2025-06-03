import { createSlice } from "@reduxjs/toolkit";

const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024;

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState: {
       isMenuOpen: isLargeScreen,
    },

    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
    },
});

export const {toggleMenu, closeMenu} = sideBarSlice.actions;
export default sideBarSlice.reducer;