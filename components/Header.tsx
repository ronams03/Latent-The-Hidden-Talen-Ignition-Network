
import React from 'react';
import { BrainIcon } from './icons/BrainIcon';

export const Header: React.FC = () => {
    return (
        <header className="bg-brand-surface border-b border-brand-border p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-brand-primary/20 rounded-lg">
                       <BrainIcon className="w-8 h-8 text-brand-primary" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-brand-text-primary tracking-tight">Latent</h1>
                        <p className="text-sm text-brand-text-secondary hidden md:block">The Hidden Talent Ignition Network</p>
                    </div>
                </div>
                <p className="text-center text-sm text-brand-text-secondary italic max-w-lg hidden lg:block">
                    “Your next breakthrough idea isn’t in a meeting. It’s in someone who’s never spoken up.”
                </p>
            </div>
        </header>
    );
};
