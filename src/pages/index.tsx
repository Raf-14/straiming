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
            className="container relative max-w-full h-screen bg-no-repeat bg-cover p-3 flex justify-center flex-col items-center"
            style={{backgroundImage: 'url(../../public/assets/image1.jpg)'}}
            >
            <div className=" absolute  w-full h-screen flex  items-center flex-col bg-gradient-to-r from-white/30 to-purple-500"></div>
            <div className="container z-10 flex justify-center items-center flex-col gap-5">
                <h1 
                className="text-center font-serif text-base md:text-2xl text-white"
                >Welcome to Audio-X</h1>
                <p
                className="text-center text-sm md:text-xl text-zinc-200 mt-2 font-semibold"
                >Ecoutez gratuitemen de la musique congolaise de vos choix</p>
                <Button
                    className="mt-4 w-xl bg-purple-600 rounded-2xl m-2 hover:bg-purple-400 text-white font-serif text-uppercase font-bold"
                    type="button"
                    onClick={handleLink}
                >
                    Demarer
                </Button>
                {/* Already have acount */}
                <p
                className="text-center text-sm md:text-xl text-zinc-200 mt-5 font-semibold"
                >Déjà un compte? <Link to="/pages/connexion" className="underline text-white">Connectez-vous</Link> </p>
                <p
                className="text-center text-sm md:text-xl text-zinc-200 mt-5 font-semibold"
                >Créez votre playlist en cliquant sur "Demarer"</p>
            </div>
            
        </div>
    );
}
export default Home;