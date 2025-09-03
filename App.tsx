
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { DashboardGrid } from './components/DashboardGrid';
import { RoleSimulator } from './components/RoleSimulator';
import { PotentialSpotlight } from './components/PotentialSpotlight';
import { OpportunityMatcher } from './components/OpportunityMatcher';
import { MicroChallenges } from './components/MicroChallenges';
import { TalentEchoMap } from './components/TalentEchoMap';
import { EmployeeProfileModal } from './components/EmployeeProfileModal';
import { useMockData } from './hooks/useMockData';
import type { Employee } from './types';

const App: React.FC = () => {
    const { employees, opportunities, challenges, talentEchos, loading } = useMockData();
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [spotlightEmployee, setSpotlightEmployee] = useState<Employee | null>(null);

    useEffect(() => {
        if (employees.length > 0) {
            setSpotlightEmployee(employees[0]);
        }
    }, [employees]);

    const handleSelectEmployee = (employee: Employee) => {
        setSelectedEmployee(employee);
    };

    const handleCloseModal = () => {
        setSelectedEmployee(null);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-brand-bg text-brand-text-primary">
                <div className="text-2xl">Initializing Latent Engine...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-bg font-sans">
            <Header />
            <main className="container mx-auto p-4 md:p-8">
                <DashboardGrid>
                    {spotlightEmployee && <PotentialSpotlight employee={spotlightEmployee} onProfileClick={handleSelectEmployee} />}
                    <RoleSimulator employees={employees} />
                    <OpportunityMatcher opportunities={opportunities} onProfileClick={handleSelectEmployee} />
                    <MicroChallenges challenges={challenges} />
                    <TalentEchoMap echos={talentEchos} />
                </DashboardGrid>
            </main>
            {selectedEmployee && (
                <EmployeeProfileModal employee={selectedEmployee} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default App;
