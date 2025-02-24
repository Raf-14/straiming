import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import  SignUp  from "./pages/Inscription";
import LogIn from "./pages/Connexion";
import HomePage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import Bibliotheque from "./pages/Bibliotheque";
import Profile from "./pages/profile";
import MusicPlayer from "./pages/MusicPlayer";
import PlayList from "./pages/PlayList";

export default function App() {
  return(
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/pages/inscrption" element= { <SignUp /> } />
            <Route path="/pages/connexion" element= { <LogIn /> } />
            <Route path="/pages/Homepage" element= { <HomePage /> } />
            <Route path="/pages/Searchpage" element = { <SearchPage />} />
            <Route path="/pages/Bibliotehque" element = { <Bibliotheque />} />
            <Route path="/pages/Profile" element = { <Profile />} />
            <Route path="/pages/PlayList/:id" element = { <PlayList />} />
            <Route path="/pages/playerMusic/:id" element = { <MusicPlayer />} />
            <Route path="*" element = {<h1> cannot find page</h1>} />
          </Routes>
        </Router>

  )
}
