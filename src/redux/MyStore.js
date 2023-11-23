const { configureStore } = require("@reduxjs/toolkit");
import AuthReducer from './AuthSlice'


const MyStore = configureStore({
    reducer: {
        auth: AuthReducer
    }
})

export default MyStore