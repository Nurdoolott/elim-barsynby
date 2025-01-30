import {Route, Routes} from "react-router-dom";
import {Error} from "../pages/Error/error.jsx";
import {LoginPage} from "../pages/login/login-page.jsx";
import RegisterPage from "../pages/register/register-page.jsx";
import {MainPage} from "../pages/mainPage/main-page.jsx";



function App() {


  return (

        <Routes>
            <Route path="*" element={<Error/>}/>
            <Route path="/" element={<MainPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />

        </Routes>
  )
}

export default App;
