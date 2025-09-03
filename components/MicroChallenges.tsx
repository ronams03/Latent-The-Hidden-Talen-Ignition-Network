
import React from 'react';
import { Card } from './Card';
import { UsersIcon } from './icons/UsersIcon';
import type { Challenge } from '../types';

interface MicroChallengesProps {
    challenges: Challenge[];
}

export const MicroChallenges: React.FC<MicroChallengesProps> = ({ challenges }) => {
    return (
        <Card title="Micro-Transformation Challenges" icon={<UsersIcon className="w-6 h-6 text-purple-400" />}>
            <p className="text-sm text-brand-text-secondary mb-4">
                Short, impactful challenges to test and unlock potential.
            </p>
            <div className="space-y-3">
                {challenges.map(challenge => (
                    <div key={challenge.id} className="bg-brand-bg p-3 rounded-lg border border-brand-border/50">
                        <div className="flex justify-between items-start">
                            <h4 className="font-semibold text-brand-text-primary">{challenge.title}</h4>
                            <span className="text-xs bg-brand-surface px-2 py-1 rounded-full whitespace-nowrap">{challenge.duration}</span>
                        </div>
                        <p className="text-sm text-brand-text-secondary mt-1">{challenge.description}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};
