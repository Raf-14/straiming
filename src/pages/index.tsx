import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";



//Home page

function Home() {
    const handleLink = () => {
        //got to register page
        window.location.href = "/pages/inscrption.tsx";
    }
    return (
        <div
            className="container relative max-w-full h-screen bg-no-repeat bg-cover p-3 flex justify-center flex-col items-center"
            style={{backgroundImage: 'url(../../public/assets/image1.jpg)'}}
            >
            <div className=" absolute  w-full h-screen flex  items-center flex-col bg-gradient-to-r from-black/30 to-purple-500/50"></div>
            <div className="container z-10 flex justify-center items-center flex-col gap-5">
                <h1 
                className="text-center font-serif text-base md:text-2xl text-white"
                >Welcome to Audio-X</h1>
                <p
                className="text-center text-sm md:text-xl text-zinc-200 mt-2 font-semibold"
                >Ecoutez gratuitemen de la musique congolaise de vos choix</p>
                <Button
                    title="Demarer"
                    className="input text-white font-semibold font-serif"
                    type="button"
                    onClick={handleLink}
                />
                {/* Already have acount */}
                <p
                className="text-center text-sm md:text-xl text-zinc-200 mt-5 font-semibold"
                >Déjà un compte? <Link to="/">Connectez-vous</Link> </p>
                <p
                className="text-center text-sm md:text-xl text-zinc-200 mt-5 font-semibold"
                >Créez votre playlist en cliquant sur "Demarer"</p>
            </div>
            
        </div>
    );
}
export default Home;