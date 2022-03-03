import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchedUser = createAsyncThunk('users/userdata',
async () => {
    const res = await fetch('http://localhost:3000/users');
    const data = await res.json()
    return data
}
)

export const fetchedPost = createAsyncThunk('posts/postdata',
async () => {
    const res = await fetch('http://localhost:3000/posts');
    const data = await res.json()
    return data
}
)