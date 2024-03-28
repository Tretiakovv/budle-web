import {useStore} from "../../../../store/store";
import {useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

export const useSignInScreen = () => {

    // action for register user
    const registerUser = useStore(state => state.registerUser)

    const signInSchema = z.object({
        name: z.string().min(1, "Имя пользователя не может быть пустым"),
        email: z.string().min(1, "Почта не может быть пустой").email("Почта введена неверно"),
        phoneNumber: z.string().min(1, "Номер телефона не может быть пустым")
    })

    const {
        register, handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm({
        mode: "all",
        resolver: zodResolver(signInSchema)
    })

    const [isRegisterError, setRegisterError] = useState("")

    // handle submit SignIn form data
    const onSubmit = (data) => {
        console.log(data)
        registerUser(data)
            .then((exception) => exception && setRegisterError(exception.message))
            .catch(console.log)
    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        isRegisterError: isRegisterError,
        register, errors, isSubmitting
    }

}