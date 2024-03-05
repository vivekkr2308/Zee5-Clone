import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api";
//Defines an asynchronous thunk (signUpUser) using createAsyncThunk. This thunk handles the asynchronous process of signing up a user.
// The first argument is a string representing the type of the action ("user/signUpUser").
// The second argument is an async function that performs the actual API call using Axios
//The first argument to createAsyncThunk is a string that serves as a prefix for the generated action types. It helps identify the different states of the async operation in your Redux store.
// The second argument is an async function that performs the asynchronous operation, in this case, a GET request using Axios.
// The fulfilled action creator will be automatically dispatched when the async function resolves successfully, and the rejected action creator will be dispatched when an error occurs.
export const signUpUser = createAsyncThunk("user/signUpUser", async (userData) => {
    //The userData variable is a parameter of the createAsyncThunk function. When you dispatch the signUpUser action creator, you would typically pass an object as an argument containing the user data needed for the signup operation. 
    try {

        // In Axios, the axios.post method typically accepts three parameters:
        // 1.URL (string), 2. Data (object or string):, 3. Config (optional object)

        const response = await axios.post('https://academics.newtonschool.co/api/v1/user/signup', {
            ...userData
        });
        return response.data;
    } catch (error) {
        return Promise.reject(error.response.data);
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        status: null,
        loading: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.status = action?.payload?.status;
                //When the async operation is fulfilled (successfully completed), the fulfilled action is dispatched, and the extraReducers block handles it.
               //action here contains the payload returned by the async function (response.data in this case).

            })
            .addCase(signUpUser.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error.message;
            })
    },
});


export default userSlice.reducer;

