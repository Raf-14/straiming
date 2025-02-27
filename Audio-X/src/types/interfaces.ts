

// interface for component barre
export interface FavoritePagesProps {
  title: string;
  buttonText: string;
  buttonLink: string;
}

//interface for compoent barre song
export interface BarreSongProps {
    id: string;
    song: string;
    artist: string;
    image: string;
}

//interface for input component 
export interface InputProps {
    type: string;
    placeholder: string;
    value?: string;
    className: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

//interface for card component 
export interface CardProps {
    title: string;
    image: string;
    description: string;
}

//interface for button component 
export interface ButtonProps {
  children: string;
  className: string;
  disabled?: boolean;
  type: 'submit' | 'button' | 'reset';
  onClick?: () => void;
}