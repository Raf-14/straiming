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
    <div className="bg-gray-800 w-full h-screen">
          <form onSubmit={handleSubmit}
              className={`w-full max-w-md mx-auto p-6 flex flex-col justify-center items-center`}
              >
                  <h2 className="text-2xl font-semibold text-gray-800 uppercase">Welcome back</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">Sign in to discover, stream, and enjoy millions of songs</h3>
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
                    className="border border-zinc-200  font-serif focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                  {error && (
                      <p className="text-red-500 font-thin text-2xl font-serif" role="alert">
                      {error}
                    </p>
                  )}
                
                <Button
                    type="submit"
                    className="mt-4 w-xl bg-purple-600 rounded-2xl m-2 hover:bg-purple-400 text-white font-serif text-uppercase font-bold"
                    disabled={isLoading}>
                    {isLoading ? 'Chargement...' : 'Connexion'}
                  </Button>
                  {/* forgot password */}
                  <p className="text-zinc-100 mt-4"><a href="#"><span className="underline text-zinc-100">Mot de passe oublié</span> ?</a></p>
                  <p className="text-zinc-100 mt-4"><span className="underline mr-5 text-black">Linkdedine</span> ou continuer avec <span className="underline text-black ml-5">Tinder</span></p>
                  <div className="container-button w-md flex justify-center items-center gap-5">
                  <Button
                    type="button"
                    className="mt-4 w-xs bg-white rounded-md"
                    disabled={false}
                    >Google (français)</Button>
                    <Button
                    type="button"
                    className="mt-4 w-xs bg-white rounded-md"
                    disabled={false}>
                      Facebook
                    </Button>
                  </div>
                  <p className="text-zinc-100 mt-4">have'nt account? <a href="./inscrption.tsx" className="text-blue-600">Register</a></p>  
              </form>
    </div>
   
  )
}

export default LogIn;