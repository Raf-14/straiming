import React, {  useState } from 'react';
// import { validators } from '../helpers/validations';


import { useState } from "react";
import { z } from "zod";

// Validation avec Zod
const signUpSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("L'email est invalide"),
  tel: z.string().min(10, "Le numéro de téléphone est invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
  password2: z.string(),
}).refine((data) => data.password === data.password2, {
  message: "Les mots de passe ne correspondent pas",
  path: ["password2"],
});

// Interface TypeScript pour le formulaire
export interface SignUpData {
  name: string;
  last_name: string;
  email: string;
  tel: string;
  password: string;
  password2: string;
}

// Hook personnalisé pour gérer l'inscription
export const useRegisterForm = () => {
  const [formData, setFormData] = useState<SignUpData>({
    name: '',
    last_name: '', 
    email: '',
    tel: '',
    password: '',
    password2: '',
  });
  
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Gestion des inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Récupérer la date actuelle (ISO format)
  const getCurrentDate = () => {
    return new Date().toISOString();
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Vérification avec Zod
    const validation = signUpSchema.safeParse(formData);
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          createdAt: getCurrentDate(), // Ajouter la date de création
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'inscription");
      }

      console.log("Inscription réussie :", data);
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue lors de l'inscription.");
      console.error("Erreur d'inscription :", err);
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
};

  // export const useRegisterForm = () => {
  //   const [formData, setFormData] = useState<SignUpData>({
  //       name: '',
  //       email: '',
  //       tel: '',
  //       password: '',
  //       password2: '',
  //     });
  //     const [ error, setError ] = useState<string | null>(null);
  //     const [ isLoading, setIsLoading ] = useState<boolean>(false);
    
  //   /**
  //    * Gère la modification des champs du formulaire.
  //   */
  //   // const validateField = useCallback((name: string, value: string) => {
  //   //     switch (name) {
  //   //       case 'email':
  //   //         return validators.email(value) ? null : 'Veuillez entrer une adresse email valide';
  //   //       case 'password':
  //   //         return validators.password(value) ? null : 'Mot de passe non conforme';
  //   //       case 'password2':
  //   //         return validators.passwordMatch(value, formData.password) 
  //   //           ? null 
  //   //           : 'Les mots de passe ne correspondent pas';
  //   //       default:
  //   //         return null;
  //   //     }
  //   //   }, [formData.password]);

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //       const { name, value } = e.target;
  //       setFormData(prev => ({...prev, [name]: value}));
  //     };
  //   // const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   //     const { name, value } = e.target;
  //   //     setFormData(prev => ({...prev, [name]: value}));
  //   //     const fieldError = validateField(name, value);
  //   //     setError(fieldError)
  //   //   }, [validateField]);

  //     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //       e.preventDefault();
  //           // Vérification basique des champs
  //           if (!formData.name) return setError('Veuiller entrer votre nom');
  //           if (!formData.email) return setError('Veuiller entrer votre email');
  //           if (!formData.tel) return setError('Veuiller entrer votre numéro de téléphone');
  //           if (!formData.password) return setError('Veuiller entrer votre  mot de passe');
  //           if (formData.password !== formData.password2) return setError('Veuiller entrer votre  mot de passe correctement');
        
  //           setError(null);
  //           setIsLoading(true);
  //       // faire une requête fetch à votre API pour créer un nouvel utilisateur
  //       try {
  //         // Simulation d'un appel API pour l'authentification
  //         await new Promise(resolve => setTimeout(resolve, 3000));
  //         console.log("Connexion réussie :", formData);
  //         console.log("Token:", response.data.token);
  //       } catch (err) {
  //         setError("Une erreur est survenue lors de la connexion.");
  //         console.error("Erreur de connexion :", err);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };
  //     return {
  //       formData,
  //       error,
  //       isLoading,
  //       handleChange,
  //       handleSubmit,
  //     };
  // }