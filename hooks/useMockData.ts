
import { useState, useEffect } from 'react';
import type { Employee, Opportunity, Challenge, TalentEcho } from '../types';

export const useMockData = () => {
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [talentEchos, setTalentEchos] = useState<TalentEcho[]>([]);

    useEffect(() => {
        const generateData = () => {
            const mockEmployees: Employee[] = [
                {
                    id: 1, name: 'Maria Rodriguez', role: 'Data Analyst', department: 'Analytics', avatarUrl: 'https://picsum.photos/id/1027/200/200',
                    profileSummary: 'Detail-oriented data analyst with a knack for finding patterns. Spends free time writing short stories and participating in local theater.',
                    hiddenTalents: ['Creative Writing', 'Public Speaking', 'Crisis Management'],
                    careerHorizons: [
                        { title: 'Chief Empathy Officer', year: 2028, path: ['Lead a user research project', 'Mentor junior analysts', 'Develop a customer feedback workshop'] },
                        { title: 'Product Manager', year: 2026, path: ['Collaborate with engineering on a feature', 'Take a UX design course', 'Present a product idea'] }
                    ]
                },
                {
                    id: 2, name: 'Jamal Green', role: 'Software Engineer', department: 'Engineering', avatarUrl: 'https://picsum.photos/id/1005/200/200',
                    profileSummary: 'Backend engineer focused on systems architecture. Organizes team-building events and volunteers as a coding tutor for kids.',
                    hiddenTalents: ['Community Building', 'Mentorship', 'Systems Thinking'],
                    careerHorizons: [
                        { title: 'Engineering Manager', year: 2027, path: ['Lead a small project team', 'Mentor an intern', 'Take a leadership training course'] },
                        { title: 'Tech Evangelist', year: 2029, path: ['Speak at a local meetup', 'Write technical blog posts', 'Contribute to an open-source project'] }
                    ]
                },
                {
                    id: 3, name: 'Aisha Khan', role: 'Accountant', department: 'Finance', avatarUrl: 'https://picsum.photos/id/1011/200/200',
                    profileSummary: 'Meticulous accountant with an interest in process optimization. Passionate about photography and visual storytelling.',
                    hiddenTalents: ['Visual Design', 'Process Optimization', 'Client Presentation'],
                    careerHorizons: [
                        { title: 'Financial Planning Strategist', year: 2026, path: ['Automate a reporting process', 'Present financial models to leadership', 'Analyze market trends'] },
                        { title: 'Internal Consultant', year: 2028, path: ['Lead a cross-departmental efficiency project', 'Develop training materials', 'Shadow a project manager'] }
                    ]
                },
                {
                    id: 4, name: 'Kenji Tanaka', role: 'Support Agent', department: 'Customer Success', avatarUrl: 'https://picsum.photos/id/1012/200/200',
                    profileSummary: 'Empathetic support agent known for high customer satisfaction. Plays competitive strategy games and is learning about game theory.',
                    hiddenTalents: ['Strategic Thinking', 'Negotiation', 'User Empathy'],
                    careerHorizons: [
                         { title: 'User Experience Researcher', year: 2025, path: ['Document common user pain points', 'Participate in a design sprint', 'Learn wireframing tools'] },
                        { title: 'Customer Success Manager', year: 2027, path: ['Handle a key account', 'Develop a customer onboarding guide', 'Train new support agents'] }
                    ]
                }
            ];
            setEmployees(mockEmployees);

            setOpportunities([
                { id: 1, title: 'Brand Storytelling Sprint', description: 'Develop a new narrative for our upcoming product launch.', requiredSkills: ['Marketing', 'Copywriting'], wildcardCandidate: mockEmployees[2] },
                { id: 2, title: 'Internal Hackathon Task Force', description: 'Organize and promote the annual company-wide hackathon.', requiredSkills: ['Project Management', 'Communication'], wildcardCandidate: mockEmployees[1] },
                { id: 3, title: 'Q3 Financials Presentation Redesign', description: 'Transform our standard finance deck into a compelling visual story for investors.', requiredSkills: ['Finance', 'PowerPoint'], wildcardCandidate: mockEmployees[0] },
            ]);

            setChallenges([
                { id: 1, title: 'Redesign Our Onboarding Email', description: 'Rewrite the first email a new customer receives from a customer’s point of view.', duration: '3 Days' },
                { id: 2, title: 'Host a 15-Min Team Inspiration Session', description: 'Share a concept, story, or idea that you find inspiring with your team.', duration: '1 Day' },
                { id: 3, title: 'Pitch a Moonshot Idea', description: 'Record a 2-minute video pitching a bold, innovative idea for the company.', duration: '5 Days' },
            ]);
            
            setTalentEchos([
                { id: 1, personName: 'Jamal Green', action: 'Led a volunteer workshop', impact: 'Team creativity spiked', metric: '+23%' },
                { id: 2, personName: 'Aisha Khan', action: 'Wrote a personal blog post', impact: 'Department retention improved', metric: '+5%' },
            ]);

            setLoading(false);
        };

        // Simulate network delay
        setTimeout(generateData, 1500);
    }, []);

    return { employees, opportunities, challenges, talentEchos, loading };
};
