import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import { Card, CardContainer } from "./components/Card";
import { Input } from "./components/Input";
import { BarreSong } from "./components/list-container-song";
import { SearchBarre } from "./components/SearchBare";
import Home from "./pages/index";
import  SignUp  from "./pages/Inscription";
import LogIn from "./pages/Connexion";
import HomePage from "./pages/Homepage";

export default function App() {
  return(
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/pages/inscrption.tsx" element= { <SignUp /> } />
            <Route path="/pages/connexion.tsx" element= { <LogIn /> } />
            <Route path="/pages/Homepage.tsx" element= { <HomePage /> } />
            <Route path="/pages/contact.tsx" />
          </Routes>
        </Router>

  )
}
