import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./screens/admin-panel/establishment-list/App";
import ForgotPassword from "./screens/authoristation/forgot-password/ForgotPassword";
import SignIn from "./screens/authoristation/sign-in/SignIn";
import LogIn from "./screens/authoristation/log-in/LogIn";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<App/>} path={'/'}/>
            <Route element={<SignIn/>} path={'/sign_in'} />
            <Route element={<LogIn/>} path={'/log_in'} />
            <Route element={<ForgotPassword/>} path={'/forgot_password'} />
            <Route path='*' element={
                <div> Not found </div>
            }></Route>
        </Routes>
    </BrowserRouter>
}

export default Router