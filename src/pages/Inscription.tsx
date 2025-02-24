import React, { FC, useState } from 'react';
import { Input } from '../components/Input';
import Button from '../components/Button';

interface SignUpProps {
    className?: string;
    onSignUp?: () => void;
}

 const SignUp:FC<SignUpProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    password: '',
    password2: '',
  });
  const [ error, setError ] = useState<string | null>(null);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
        // Vérification basique des champs
        if (!formData.name) return setError('Veuiller entrer votre nom');
        if (!formData.email) return setError('Veuiller entrer votre email');
        if (!formData.tel) return setError('Veuiller entrer votre numéro de téléphone');
        if (!formData.password) return setError('Veuiller entrer votre password');
        if (!formData.password2) return setError('Veuiller confirmer votre password');
        if (formData.password !== formData.password2) return setError("le mot de passe n'est pas identique");
    
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
    <div className="bg-gray-800 w-full h-full">
      <form onSubmit={handleSubmit}
    className={`w-full max-w-2xl mx-auto p-6 flex flex-col justify-center items-center border border-gray-700 shadow-xl rounded-md`}
    >
        <h2 className="text-2xl font-bold text-zinc-50 uppercase">Salut</h2>
        <h3 className="text-xl font-semibold text-zinc-100 mt-4">Inscrivez-vous pour commencer à écouter tous vos artiste</h3>
        <Input
          type="text"
          name="name"
          placeholder="username"
          value={formData.name}
          onChange={handleChange}
          className="border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
        <Input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
        <Input
          type="tel"
          name="tel"
          placeholder="numéro de téléphone"
          value={formData.tel}
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
        <Input
        type="password"
        name="password2"
        placeholder="confirm password"
        value={formData.password2}
        onChange={handleChange}
        className="border border-zinc-200 font-serif focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
           {isLoading ? 'Chargement...' : 'Register'}
        </Button>
        <p className="text-zinc-100 mt-4">Already have an account? <a href="./connexion.tsx" className="text-blue-600">Sign In</a></p>
        <p className="text-gray-600 mt-4"><span className="underline mr-5 text-black">Linkdedine</span> ou continuer avec <span className="underline text-black ml-5">Tinder</span></p>
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
    </form>
    </div>
  )
}

export default SignUp;