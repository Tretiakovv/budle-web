import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./screens/establishment-list/App";
import SignIn from "./screens/authorisation/SignIn";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<App/>} path='/'/>
            <Route element={<SignIn/>} path={'/signIn'} />
            <Route path='*' element={
                <div> Not found </div>
            }></Route>
        </Routes>
    </BrowserRouter>
}

export default Router