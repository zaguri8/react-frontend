import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./reducers/userSlice"


const store = configureStore({
    reducer: {
        user_store: userSlice.reducer
    }
})


type RootState = ReturnType<typeof store.getState>


export { RootState }
export default store