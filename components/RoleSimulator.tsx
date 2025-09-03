
import React, { useState, useCallback } from 'react';
import { Card } from './Card';
import { BrainIcon } from './icons/BrainIcon';
import { LightbulbIcon } from './icons/LightbulbIcon';
import { simulateRolePotential } from '../services/geminiService';
import type { Employee, SimulationResult } from '../types';

interface RoleSimulatorProps {
    employees: Employee[];
}

const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-500'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.365 2.444a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.365-2.444a1 1 0 00-1.175 0l-3.365 2.444c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
);


export const RoleSimulator: React.FC<RoleSimulatorProps> = ({ employees }) => {
    const [scenario, setScenario] = useState('');
    const [results, setResults] = useState<SimulationResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSimulation = useCallback(async () => {
        if (!scenario.trim()) {
            setError("Please enter a scenario.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setResults([]);
        try {
            const simulationResults = await simulateRolePotential(scenario, employees);
            setResults(simulationResults);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    }, [scenario, employees]);
    
    const getPotentialRating = (score: number) => {
        const stars = Math.round(score / 20);
        return Array(5).fill(0).map((_, i) => <Star key={i} filled={i < stars} />);
    };

    return (
        <Card title="AI 'What-If' Role Simulation" icon={<BrainIcon className="w-6 h-6 text-brand-primary" />} className="md:col-span-2">
            <p className="text-sm text-brand-text-secondary mb-4">
                Predict success by simulating roles. Who would excel in a high-pressure situation?
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                    type="text"
                    value={scenario}
                    onChange={(e) => setScenario(e.target.value)}
                    placeholder="e.g., Lead a creative pitch for a new product"
                    className="flex-grow bg-brand-bg border border-brand-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm"
                    disabled={isLoading}
                />
                <button
                    onClick={handleSimulation}
                    disabled={isLoading}
                    className="bg-brand-primary text-white font-bold py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 disabled:bg-brand-text-secondary disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Simulating...
                        </>
                    ) : "Run Simulation"}
                </button>
            </div>
            
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

            <div className="mt-4 space-y-4">
                {results.map((result, index) => (
                    <div key={index} className="bg-brand-bg p-4 rounded-lg border border-brand-border animate-fade-in">
                        <div className="flex justify-between items-start">
                           <div>
                                <h4 className="font-bold text-brand-primary">{result.employeeName}</h4>
                                {result.isWildcard && (
                                     <div className="flex items-center text-xs text-brand-secondary mt-1">
                                        <LightbulbIcon className="w-4 h-4 mr-1" />
                                        <span>Wildcard Pick</span>
                                    </div>
                                )}
                           </div>
                           <div className="flex items-center gap-1" title={`Potential: ${result.potentialScore}/100`}>
                                {getPotentialRating(result.potentialScore)}
                           </div>
                        </div>
                        <p className="text-sm text-brand-text-secondary mt-2">{result.justification}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};
