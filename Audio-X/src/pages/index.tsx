import Button from "../components/Button";
import { Link } from "react-router-dom";



//Home page

function Home() {
    const handleLink = () => {
        //got to register page
        window.location.href = "/pages/inscrption";
    }
    return (
        <div
            className="container relative flex flex-col items-center justify-center h-screen max-w-full p-3 bg-no-repeat bg-cover"
            style={{backgroundImage: 'url(../../public/assets/image1.jpg)'}}
            >
            <div className="absolute flex flex-col items-center w-full h-screen bg-gradient-to-r from-white/30 to-purple-500"></div>
            <div className="container z-10 flex flex-col items-center justify-center gap-5">
                <h1 
                className="font-serif text-base text-center text-white md:text-2xl"
                >Welcome to Audio-X</h1>
                <p
                className="mt-2 text-sm font-semibold text-center md:text-xl text-zinc-200"
                >Ecoutez gratuitemen de la musique congolaise de vos choix</p>
                <Button
                    className="m-2 mt-4 font-serif font-bold text-white bg-purple-600 w-sm md:w-xl rounded-2xl hover:bg-purple-400 text-uppercase"
                    type="button"
                    onClick={handleLink}
                >
                    Demarer
                </Button>
                {/* Already have acount */}
                <p
                className="mt-5 text-sm font-semibold text-center md:text-xl text-zinc-200"
                >Déjà un compte? <Link to="/pages/connexion" className="text-white underline">Connectez-vous</Link> </p>
                <p
                className="mt-5 text-sm font-semibold text-center md:text-xl text-zinc-200"
                >Créez votre playlist en cliquant sur "Demarer"</p>
            </div>
            
        </div>
    );
}
export default Home;