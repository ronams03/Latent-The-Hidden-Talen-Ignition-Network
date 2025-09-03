
import React from 'react';
import { Card } from './Card';
import { SparklesIcon } from './icons/SparklesIcon';
import type { Employee } from '../types';

interface PotentialSpotlightProps {
    employee: Employee;
    onProfileClick: (employee: Employee) => void;
}

export const PotentialSpotlight: React.FC<PotentialSpotlightProps> = ({ employee, onProfileClick }) => {
    return (
        <Card title="Potential Spotlight" icon={<SparklesIcon className="w-6 h-6 text-brand-secondary" />} className="md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center text-center space-y-4">
                <img
                    src={employee.avatarUrl}
                    alt={employee.name}
                    className="w-24 h-24 rounded-full border-4 border-brand-secondary shadow-lg"
                />
                <div>
                    <h3 className="text-lg font-semibold text-brand-primary">{employee.name}</h3>
                    <p className="text-sm text-brand-text-secondary">{employee.role}</p>
                </div>
                <p className="text-sm text-brand-text-primary italic">
                    “{employee.profileSummary.substring(0, 100)}...”
                </p>
                <div>
                    <h4 className="font-semibold text-brand-text-primary mb-2">Discovered Latent Talents:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                        {employee.hiddenTalents.map(talent => (
                            <span key={talent} className="bg-brand-primary/10 text-brand-primary text-xs font-medium px-2.5 py-1 rounded-full">
                                {talent}
                            </span>
                        ))}
                    </div>
                </div>
                 <button 
                    onClick={() => onProfileClick(employee)}
                    className="w-full mt-4 bg-brand-primary/20 hover:bg-brand-primary/40 text-brand-primary font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    View Full Profile
                </button>
            </div>
        </Card>
    );
};
