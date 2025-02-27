import { FC } from "react";
import { CardProps } from "../types/interfaces";
import { cardsData } from "../utils/cards";

export const Card: FC<CardProps> = ({ title, image, description }: CardProps) => {
    return (
        <div className="relative flex flex-col items-center justify-center">
           <div className="h-40 cursor-pointer card w-44 md:w-72">
           <div className="w-full h-full overflow-hidden rounded-2xl">
                <img className="object-cover w-full h-full" src={image} alt={title} />
            </div>
            <div className="absolute top-0 flex flex-col items-center justify-center h-40 rounded-2xl card-body w-44 md:w-72 bg-blue-700/50">
                <h5 className="font-serif font-bold text-md md:text-xl card-title text-zinc-100">{title}</h5>
                <p className="font-sans text-sm font-thin text-center text-white md:text-2xl card-text">{description}</p>
            </div>
           </div>
        </div>
    );
};

//container card component

export const CardContainer = ({ cards }: { cards: CardProps[] }) => {
    return (
        <div className="grid items-center grid-cols-2 gap-20 md:grid-cols-4">
            {cards.map((card) => (
                <Card key={card.title} {...card} />
            ))}
        </div>
    );
};

export const CardSection = () => {
    return (
      <div className="mt-5">
        <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-48">
          {cardsData.map((card, index) => (
            <div key={index} className="relative flex flex-col items-center justify-center">
            <div className="cursor-pointer card w-90 md:w-86 h-50">
              <div className="w-full h-full overflow-hidden rounded-2xl">
                <img className="object-cover w-full h-full" src={card.image} alt={card.title} />
              </div>
              <div className="absolute top-0 flex flex-col items-center justify-center rounded-2xl card-body w-90 md:w-86 h-50 bg-blue-700/50">
                <h5 className="font-serif text-xl font-bold card-title text-zinc-100">{card.title}</h5>
                <p className="font-sans text-2xl font-thin text-white card-text">{card.description}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
  };
  