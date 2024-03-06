import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default Card;