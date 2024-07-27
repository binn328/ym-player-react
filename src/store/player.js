import { createSlice } from "@reduxjs/toolkit";

let player = createSlice({
    name: "player",
    initialState: { isPlay: true },
    reducers: {
        toggleIsPlay(state) {
            console.log(state);
            return !state;
        },
    },
});
export default player;

export let { toggleIsPlay } = player.actions;
