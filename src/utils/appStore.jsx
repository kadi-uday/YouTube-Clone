import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
    reducer: {
        sideBar: sideBarSlice,
        search: searchSlice,
        chat: chatSlice,
    },
});

export default appStore;