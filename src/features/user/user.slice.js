import { createSlice } from "@reduxjs/toolkit";
import { fetchedPost, fetchedUser } from "./user.api";

const initialState = {users:[],posts:[]};
const postSlice = createSlice({
    name:"shanu",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchedUser.fulfilled ,(state,action)=>{
            state.users = action.payload;
        })
        .addCase(fetchedPost.fulfilled ,(state,action)=>{
            state.posts = action.payload;
        })
    }
})

export default postSlice.reducer