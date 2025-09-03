
import React from 'react';
import type { Employee } from '../types';
import { BrainIcon } from './icons/BrainIcon';

interface EmployeeProfileModalProps {
    employee: Employee;
    onClose: () => void;
}

export const EmployeeProfileModal: React.FC<EmployeeProfileModalProps> = ({ employee, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-brand-surface rounded-xl shadow-2xl w-full max-w-2xl border border-brand-border animate-slide-up max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6">
                        <img src={employee.avatarUrl} alt={employee.name} className="w-32 h-32 rounded-full border-4 border-brand-primary shadow-lg flex-shrink-0" />
                        <div className="text-center sm:text-left mt-4 sm:mt-0">
                            <h2 className="text-3xl font-bold text-brand-text-primary">{employee.name}</h2>
                            <p className="text-brand-primary text-lg">{employee.role} - {employee.department}</p>
                            <p className="text-brand-text-secondary mt-2 text-sm">{employee.profileSummary}</p>
                        </div>
                        <button onClick={onClose} className="absolute top-4 right-4 text-brand-text-secondary hover:text-brand-text-primary">&times;</button>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-brand-bg p-4 rounded-lg border border-brand-border">
                            <h3 className="font-semibold text-lg mb-3 text-brand-text-primary">Hidden Talent Profile</h3>
                            <div className="flex flex-wrap gap-2">
                                {employee.hiddenTalents.map(talent => (
                                    <span key={talent} className="bg-brand-primary/10 text-brand-primary text-sm font-medium px-3 py-1.5 rounded-full">
                                        {talent}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-brand-bg p-4 rounded-lg border border-brand-border">
                            <h3 className="font-semibold text-lg mb-3 text-brand-text-primary">Career Horizon Engine</h3>
                            <div className="space-y-4">
                                {employee.careerHorizons.map(horizon => (
                                    <div key={horizon.title}>
                                        <p className="font-bold text-brand-secondary">{horizon.title} <span className="text-sm font-normal text-brand-text-secondary">by {horizon.year}</span></p>
                                        <ul className="list-disc list-inside text-sm text-brand-text-secondary mt-1">
                                            {horizon.path.slice(0, 2).map(p => <li key={p}>{p}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-brand-bg px-6 py-3 text-right border-t border-brand-border">
                    <button
                        onClick={onClose}
                        className="bg-brand-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
