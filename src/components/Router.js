import {BrowserRouter, Route, Routes} from "react-router-dom";
import EstablishmentListScreen from "./screens/admin-panel/establishment-list/EstablishmentListScreen";
import ForgotPassword from "./screens/authoristation/forgot-password/ForgotPassword";
import SignIn from "./screens/authoristation/sign-in/SignIn";
import LogIn from "./screens/authoristation/log-in/LogIn";
import EstablishmentMenuScreen from "./screens/admin-panel/establishment-menu/EstablishmentMenuScreen";
import ManagerListScreen from "./screens/admin-panel/manager-list/ManagerListScreen";
import OrderListScreen from "./screens/admin-panel/order-list/OrderListScreen";
import ProfileSettingsScreen from "./screens/admin-panel/profile-settings/ProfileSettingsScreen";

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
            <Route element={<SignIn/>} path={'/sign-in'} />
            <Route element={<LogIn/>} path={'/log-in'} />
            <Route element={<ForgotPassword/>} path={'/forgot-password'} />

            <Route path='*' element={<div> Not found </div>}></Route>

        </Routes>
    </BrowserRouter>
}

export default Router