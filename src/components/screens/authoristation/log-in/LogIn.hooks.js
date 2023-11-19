import {useStore} from "../../../../store/store";
import {z} from "zod";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";

export const useLogInScreen = () => {

    const navigate = useNavigate()
    const loginUser = useStore(state => state.loginUser)

    const logInSchema = z.object({
        login: z.string().min(1, "Логин не может быть пустым"),
        password: z.string().min(1, "Пароль не может быть пустым")
    })

    const [isLoginError, setLoginError] = useState("")

    const {
        register, handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm({
        mode: "all",
        resolver : zodResolver(logInSchema)
    })

    const onSubmit = (data) => {
        loginUser(data)
            .then((exception) => {
                exception ? setLoginError(exception.message)
                    : navigate('/establishment-list')
            })
            .catch((error) => console.log(error))
    }

    return {
        handleSubmit : handleSubmit(onSubmit),
        isLoginError : isLoginError,
        register, errors, isSubmitting,
    }

}