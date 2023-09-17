import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import httpService from "../../services/httpService";

interface User {
    id: string
    email: string
    name: string
}

export interface UserState {
    user: User | null
    loading_user: boolean
    error: unknown
}


const initialState: UserState = {
    user: null,
    loading_user: false,
    error: undefined
}


const getUserAsync = createAsyncThunk("getUserAsync", async (user_id: string, thunkAPI) => {
    const response = await httpService.get<User>(`people/${user_id}`)
    return response.data
})


const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getUserAsync.pending, (state, action) => {
            state.loading_user = true
        })

        builder.addCase(getUserAsync.rejected, (state, action) => {
            state.loading_user = false
            state.error = action.payload
        })

        builder.addCase(getUserAsync.fulfilled, (state, action) => {
            state.loading_user = false
            state.user = action.payload
        })
    }
})


export { getUserAsync }
export default userSlice