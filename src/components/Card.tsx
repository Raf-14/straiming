import React from "react";

interface CardProps {
    title: string;
    image: string;
    description: string;
}

export const Card = ({ title, image, description }: CardProps) => {
    return (
        <div className="flex flex-col justify-center items-center  relative">
           <div className="card w-44 md:w-72 h-40 cursor-pointer">
           <div className="w-full h-full overflow-hidden rounded-2xl">
                <img className="object-cover w-full h-full" src={image} alt={title} />
            </div>
            <div className="rounded-2xl card-body absolute top-0 w-44 md:w-72 h-40 flex justify-center items-center flex-col bg-blue-700/50">
                <h5 className="card-title font-bold text-purple-300 font-serif text-xl">{title}</h5>
                <p className="card-text font-extrabold text-white font-sans text-2xl">{description}</p>
            </div>
           </div>
        </div>
    );
};

//container card component

export const CardContainer = ({ cards }: { cards: CardProps[] }) => {
    return (
        <div className="flex justify-center items-center gap-2 flex-wrap">
            {cards.map((card) => (
                <Card key={card.title} {...card} />
            ))}
        </div>
    );
};