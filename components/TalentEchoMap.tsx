
import React from 'react';
import { Card } from './Card';
import { SparklesIcon } from './icons/SparklesIcon';
import type { TalentEcho } from '../types';

interface TalentEchoMapProps {
    echos: TalentEcho[];
}

export const TalentEchoMap: React.FC<TalentEchoMapProps> = ({ echos }) => {
    return (
        <Card title="Talent Echo Map" icon={<SparklesIcon className="w-6 h-6 text-yellow-400" />} className="lg:col-span-2">
            <p className="text-sm text-brand-text-secondary mb-4">
                Visualizing how one person's hidden talent inspires others and creates impact.
            </p>
            <div className="space-y-4">
                {echos.map(echo => (
                    <div key={echo.id} className="flex items-center space-x-4 bg-brand-bg p-3 rounded-lg">
                        <div className="text-center w-1/3">
                            <p className="font-semibold text-brand-primary">{echo.personName}</p>
                            <p className="text-xs text-brand-text-secondary">{echo.action}</p>
                        </div>
                        <div className="text-2xl text-brand-text-secondary animate-pulse-slow">→</div>
                        <div className="text-center w-2/3">
                            <p className="font-bold text-2xl text-brand-accent">{echo.metric}</p>
                            <p className="text-sm text-brand-text-primary">{echo.impact}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
