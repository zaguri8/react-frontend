import { useSelector } from "react-redux"
import { RootState } from "./store/store"
import { UserState } from "./store/reducers/userSlice"
import Login from "./pages/Login"


const useUser = () => {
    const userStore = useSelector<RootState, UserState>(state => state.user_store)
    return userStore
}

export default function App() {

    const { user, loading_user } = useUser()

    return <div>
        
        <Login/>

    </div>
}  