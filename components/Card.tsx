
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    title: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', icon, title }) => {
    return (
        <div className={`bg-brand-surface border border-brand-border rounded-lg shadow-lg p-6 flex flex-col space-y-4 transition-all duration-300 hover:border-brand-primary/50 hover:shadow-2xl animate-slide-up ${className}`}>
            <div className="flex items-center space-x-3">
                {icon && <div className="flex-shrink-0">{icon}</div>}
                <h2 className="text-xl font-bold text-brand-text-primary tracking-tight">{title}</h2>
            </div>
            <div className="flex-grow">
                {children}
            </div>
        </div>
    );
};
