import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import  SignUp  from "./pages/Inscription";
import LogIn from "./pages/Connexion";
import HomePage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import Bibliotheque from "./pages/Bibliotheque";
import Profile from "./pages/profile";
import PlayList from "./pages/playList";

export default function App() {
  return(
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/pages/inscrption.tsx" element= { <SignUp /> } />
            <Route path="/pages/connexion.tsx" element= { <LogIn /> } />
            <Route path="/pages/Homepage.tsx" element= { <HomePage /> } />
            <Route path="/pages/Searchpage.tsx" element = { <SearchPage />} />
            <Route path="/pages/Bibliotehque.tsx" element = { <Bibliotheque />} />
            <Route path="/pages/Profile.tsx" element = { <Profile />} />
            <Route path="/pages/PlayList.tsx" element = { <PlayList />} />
            <Route path="*" element = {<h1> cannot find page</h1>} />
          </Routes>
        </Router>

  )
}
