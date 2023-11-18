import {useStore} from "../../../../store/store";

export const useSignInScreen = () => {

    // action for register user
    const registerUser = useStore(state => state.registerUser)

    // handle submit SignIn form data
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        registerUser(Object.fromEntries(data))
    }

    return {handleSubmit}

}