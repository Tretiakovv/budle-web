import {BrowserRouter, Route, Routes} from "react-router-dom";
import EstablishmentListScreen from "./screens/admin-panel/establishment-list/screen/EstablishmentListScreen";
import ForgotPassword from "./screens/authoristation/forgot-password/ForgotPassword";
import SignIn from "./screens/authoristation/sign-in/SignIn";
import LogIn from "./screens/authoristation/log-in/LogIn";
import EstablishmentMenuScreen from "./screens/admin-panel/establishment-menu/screen/EstablishmentMenuScreen";
import ManagerListScreen from "./screens/admin-panel/manager-list/screen/ManagerListScreen";
import OrderListScreen from "./screens/admin-panel/order-list/screen/OrderListScreen";
import ProfileSettingsScreen from "./screens/admin-panel/profile-settings/screen/ProfileSettingsScreen";
import MyComponent from "./TestPage";

const Router = () => {
    return <BrowserRouter>
        <Routes>

            {/* Admin-panel screens */}
            <Route element={<EstablishmentListScreen/>} path={'/establishment-list'}/>
            <Route element={<EstablishmentMenuScreen/>} path={'/establishment-menu'}/>
            <Route element={<ManagerListScreen/>} path={'/manager-list'}/>
            <Route element={<OrderListScreen/>} path={'/order-list'}/>
            <Route element={<ProfileSettingsScreen/>} path={'/settings'}/>

            {/* Authorisation screens*/}
            <Route element={<SignIn/>} path={'/sign-in'}/>
            <Route element={<LogIn/>} path={'/log-in'}/>
            <Route element={<ForgotPassword/>} path={'/forgot-password'}/>

            <Route path={'*'} element={<MyComponent/>} />

        </Routes>
    </BrowserRouter>
}

export default Router