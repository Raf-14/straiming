import React, { useState } from 'react';
import { Input } from '../components/Input';
import Button from '../components/Button';

interface SignUpProps {
    className?: string;
    onSignUp?: () => void;
}

 const SignUp: React.FC<SignUpProps> = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // faire une requête fetch à votre API pour créer un nouvel utilisateur
    console.log('Form submitted:', formData);
  };
  return (
    <form onSubmit={handleSubmit}
    className={`w-full max-w-md mx-auto p-6 flex flex-col justify-center items-center`}
    >
        <h2 className="text-2xl font-semibold text-gray-800 uppercase">Salut</h2>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Inscrivez-vous pour commencer à écouter tous vos artiste</h3>
        <Input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
          className=" border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
        <Input
          type="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
        <Input
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          className="border border-zinc-200  font-serif focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
        <Input
        type="password"
        placeholder="confirm password"
        className="border border-zinc-200 font-serif focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
        <Button
        type="submit"
        title="Register"
        className="mt-4 w-full"
        disabled={!formData.username ||!formData.email ||!formData.password}
        />
        <p className="text-gray-600 mt-4">Already have an account? <a href="./connexion.tsx" className="text-blue-600">Sign In</a></p>
        <p className="text-gray-600 mt-4"><span className="underline mr-5 text-black">Linkdedine</span> ou continuer avec <span className="underline text-black ml-5">Tinder</span></p>
        <div className="container-button flex justify-center items-center ">
            <Button
            type="button"
            title="Google (français)"
            className="mt-4 w-xs"
            disabled={false}
            />
            <Button
            type="button"
            title="Facebook"
            className="mt-4 w-xs"
            disabled={false}
            />
        </div>


  
    </form>
  )
}

export default SignUp;