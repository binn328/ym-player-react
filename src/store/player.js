import { createSlice } from "@reduxjs/toolkit";

let player = createSlice({
    name: "player",
    initialState: { isPlay: false },
    reducers: {
        toggleIsPlay(state) {
            return !isPlay;
        },
    },
});
export default player;

export let { toggleIsPlay } = player.actions;
