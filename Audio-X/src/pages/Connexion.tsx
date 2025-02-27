import React, { FC, useState } from 'react';
import { Input } from '../components/Input';
import Button from '../components/Button';

interface LogInProps {
    className?: string;
    onLogInUp?: () => void;
}

 const LogIn:FC<LogInProps> = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [ error , setError ] = useState<string | null>(null);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!formData.email && !formData.password) return setError("Tous les champs sont réquise pous vous connecter");

    setError(null);
    setIsLoading(true);
    // faire une requête fetch à votre API pour créer un nouvel utilisateur
    try {
      // Simulation d'un appel API pour l'authentification
      await new Promise(resolve => setTimeout(resolve, 3000));
      console.log("Connexion réussie :", formData);
    } catch (err) {
      setError("Une erreur est survenue lors de la connexion.");
      console.error("Erreur de connexion :", err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full h-screen bg-gray-800">
          <form onSubmit={handleSubmit}
              className={`w-full max-w-md mx-auto p-6 flex flex-col justify-center items-center`}
              >
                  <h2 className="text-2xl font-semibold text-gray-800 uppercase">Welcome back</h2>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">Sign in to discover, stream, and enjoy millions of songs</h3>
                  <Input
                      type="email"
                      name="email"
                      placeholder="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="font-serif border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                  {error && (
                      <p className="font-serif text-sm font-thin text-red-500 md:text-2xl" role="alert">
                      {error}
                    </p>
                  )}
                
                <Button
                    type="submit"
                    className="m-2 mt-4 font-serif font-bold text-white bg-purple-600 w-80 md:w-xl rounded-2xl hover:bg-purple-400 text-uppercase"
                    disabled={isLoading}>
                    {isLoading ? 'Chargement...' : 'Connexion'}
                  </Button>
                  {/* forgot password */}
                  <p className="mt-4 text-zinc-100"><a href="#"><span className="underline text-zinc-100">Mot de passe oublié</span> ?</a></p>
                  <p className="mt-4 text-zinc-100"><span className="mr-5 text-black underline">Linkdedine</span> ou continuer avec <span className="ml-5 text-black underline">Tinder</span></p>
                  <div className="flex items-center justify-center gap-5 container-button w-md">
                  <Button
                    type="button"
                    className="mt-4 text-sm bg-white rounded-md md:text-md w-30 md:w-xs"
                    disabled={false}
                    >Google (français)</Button>
                    <Button
                    type="button"
                    className="mt-4 text-sm bg-white rounded-md w-30 md:w-xs md:text-md"
                    disabled={false}>
                      Facebook
                    </Button>
                  </div>
                  <p className="mt-4 text-zinc-100">have'nt account? <a href="./inscrption" className="text-blue-600">Register</a></p>  
              </form>
    </div>
   
  )
}

export default LogIn;