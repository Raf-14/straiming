import React, { FC } from 'react';
import { Input } from '../components/Input';
import Button from '../components/Button';
import { useRegisterForm } from '../HOOKS/useRegister';

interface SignUpProps {
    className?: string;
    onSignUp?: () => void;
}

 const SignUp:FC<SignUpProps> = () => {
  const { 
    formData,
    error,
    isLoading,
    handleChange,
    handleSubmit,
   } = useRegisterForm()
   
  return (
    <div className="w-full h-full bg-gray-800">
      <form onSubmit={handleSubmit}
    className={`w-full max-w-2xl mx-auto p-6 flex flex-col justify-center items-center border border-gray-700 shadow-xl rounded-md`}
    >
        <h2 className="text-2xl font-bold uppercase text-zinc-50">Salut</h2>
        <h3 className="mt-4 text-xl font-semibold text-zinc-100">Inscrivez-vous pour commencer à écouter tous vos artiste</h3>
        <Input
          type="text"
          name="name"
          placeholder="username"
          value={formData.name}
          onChange={handleChange}
          className="border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
        <Input
          type="text"
          name="last_name"
          placeholder="your last name"
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
          className="font-serif border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
        <Input
        type="password"
        name="password2"
        placeholder="confirm password"
        value={formData.password2}
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
    </form>
    </div>
  )
}

export default SignUp;