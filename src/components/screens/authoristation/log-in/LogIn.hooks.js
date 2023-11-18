import {useStore} from "../../../../store/store";

export const useLogInScreen = () => {

    const loginUser = useStore(state => state.loginUser)

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        loginUser(Object.fromEntries(data))
    }

    return {handleSubmit}

}