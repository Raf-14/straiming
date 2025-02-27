export const validators = {
    email: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    password: (password: string) => 
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password),
    passwordMatch: (password: string, password2: string) => 
      password === password2,
  };