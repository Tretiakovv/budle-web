import Authorisation from "../../../../ui/wrappers/authorisation/Authorisation";
import authOptions from "../../../../data/entity/AuthData";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema} from "../../../../schemas";
import {loginUserFx} from "../../../../models/auth/auth";
import {useUnit} from "effector-react";
import {useState} from "react";
import ControlledTextInput from "../../../../ui/atoms/inputs/text-input/ControlledTextInput";
import {useNavigate} from "react-router-dom";

const LogIn = () => {

    const navigate = useNavigate()

    const login = useUnit(loginUserFx)
    const [error, setError] = useState('')

    const methods = useForm({
        resolver: zodResolver(LoginSchema),
        mode: 'onSubmit'
    })

    const {formState : {errors}} = methods

    const onSubmit = (fieldValues) => {
        login(fieldValues)
            .then(_ => navigate('/establishment-list'))
            .catch(setError)
    }

    return (
        <Authorisation
            options={authOptions}
            defaultState={authOptions[0]}
            onSubmit={methods.handleSubmit(onSubmit)}
            buttonText={"Войти"}
        >
            <FormProvider {...methods}>
                <ControlledTextInput
                    errorMessage={errors.login?.message}
                    placeholder={"Введите логин"}
                    name={'login'} labelText={"Логин"}
                />
                <ControlledTextInput
                    errorMessage={errors.password?.message}
                    placeholder={"Введите пароль"}
                    name={'password'} labelText={"Пароль"}
                    type={'password'}
                />
                <div className={"text-message-wrong font-medium"}>
                    {error}
                </div>
            </FormProvider>
        </Authorisation>
    );
}

export default LogIn