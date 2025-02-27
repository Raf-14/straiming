import React, {  useState } from 'react';
// import { validators } from '../helpers/validations';

//users data to input
export interface SignUpData {
    name: string;
    email: string;
    tel: string;
    password: string;
    password2: string;
  }


  export const useRegisterForm = () => {
    const [formData, setFormData] = useState<SignUpData>({
        name: '',
        email: '',
        tel: '',
        password: '',
        password2: '',
      });
      const [ error, setError ] = useState<string | null>(null);
      const [ isLoading, setIsLoading ] = useState<boolean>(false);
    
    /**
     * Gère la modification des champs du formulaire.
    */
    // const validateField = useCallback((name: string, value: string) => {
    //     switch (name) {
    //       case 'email':
    //         return validators.email(value) ? null : 'Veuillez entrer une adresse email valide';
    //       case 'password':
    //         return validators.password(value) ? null : 'Mot de passe non conforme';
    //       case 'password2':
    //         return validators.passwordMatch(value, formData.password) 
    //           ? null 
    //           : 'Les mots de passe ne correspondent pas';
    //       default:
    //         return null;
    //     }
    //   }, [formData.password]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
      };
    // const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData(prev => ({...prev, [name]: value}));
    //     const fieldError = validateField(name, value);
    //     setError(fieldError)
    //   }, [validateField]);

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            // Vérification basique des champs
            if (!formData.name) return setError('Veuiller entrer votre nom');
            if (!formData.email) return setError('Veuiller entrer votre email');
            if (!formData.tel) return setError('Veuiller entrer votre numéro de téléphone');
            if (!formData.password) return setError('Veuiller entrer votre  mot de passe');
            if (formData.password !== formData.password2) return setError('Veuiller entrer votre  mot de passe correctement');
        
            setError(null);
            setIsLoading(true);
        // faire une requête fetch à votre API pour créer un nouvel utilisateur
        try {
          // Simulation d'un appel API pour l'authentification
        //   await new Promise(resolve => setTimeout(resolve, 3000));
           const response = await fetch('http://localhost:5000/api/auth/register',{
            name,
            email,
            tel,
            password,
           });
          console.log("Connexion réussie :", formData);
          console.log("Token:", response.data.token);
        } catch (err) {
          setError("Une erreur est survenue lors de la connexion.");
          console.error("Erreur de connexion :", err);
        } finally {
          setIsLoading(false);
        }
      };
      return {
        formData,
        error,
        isLoading,
        handleChange,
        handleSubmit,
      };
  }