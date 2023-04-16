import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const userSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
    isLoggedIn: false
  },
  reducers: {
    login: (state, action) => {
        sessionStorage.setItem("loginStatus", JSON.stringify(action.payload));
        state = action.payload; 
    },

    logout: (state) => {
        sessionStorage.removeItem("loginStatus")
        state = initialState;
    }
  }
});

export const { login, logout } = userSlice.actions

export default userSlice.reducer