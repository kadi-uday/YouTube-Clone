import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";

const appStore = configureStore({
    reducer: {
        sideBar: sideBarSlice,
    },
});

export default appStore;