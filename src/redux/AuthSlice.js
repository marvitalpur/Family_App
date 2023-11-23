const { createSlice } = require("@reduxjs/toolkit");

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        data: null,
    },

    reducers: {
        setAuttData(state, action) {
            state.data = action.payload
        }
    }

})

export const { setAuttData } = AuthSlice.actions
export default AuthSlice.reducer