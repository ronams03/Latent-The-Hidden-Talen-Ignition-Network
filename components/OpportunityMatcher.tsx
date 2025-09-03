
import React from 'react';
import { Card } from './Card';
import { TargetIcon } from './icons/TargetIcon';
import type { Opportunity, Employee } from '../types';

interface OpportunityMatcherProps {
    opportunities: Opportunity[];
    onProfileClick: (employee: Employee) => void;
}

export const OpportunityMatcher: React.FC<OpportunityMatcherProps> = ({ opportunities, onProfileClick }) => {
    return (
        <Card title="Opportunity Flash-Matching" icon={<TargetIcon className="w-6 h-6 text-green-400" />} className="md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
                {opportunities.map(opp => (
                    <div key={opp.id} className="bg-brand-bg p-3 rounded-lg border border-brand-border/50">
                        <h4 className="font-semibold text-brand-text-primary">{opp.title}</h4>
                        <p className="text-sm text-brand-text-secondary mb-3">{opp.description}</p>
                        <div className="bg-brand-surface border border-brand-border rounded-md p-3">
                             <p className="text-xs font-bold text-brand-text-secondary uppercase mb-2">Wildcard Suggestion</p>
                             <div className="flex items-center space-x-3">
                                <img src={opp.wildcardCandidate.avatarUrl} alt={opp.wildcardCandidate.name} className="w-10 h-10 rounded-full"/>
                                <div>
                                    <button 
                                        onClick={() => onProfileClick(opp.wildcardCandidate)}
                                        className="font-semibold text-brand-primary hover:underline text-left"
                                    >
                                        {opp.wildcardCandidate.name}
                                    </button>
                                    <p className="text-xs text-brand-text-secondary">{opp.wildcardCandidate.role}</p>
                                </div>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
