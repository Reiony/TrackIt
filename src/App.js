import { GlobalStyle } from "./components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignInPage";
import SignUp from "./components/SignUpPage";
export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/cadastro" element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    )
}
