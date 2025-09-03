
export interface Employee {
    id: number;
    name: string;
    role: string;
    department: string;
    avatarUrl: string;
    profileSummary: string;
    hiddenTalents: string[];
    careerHorizons: {
        title: string;
        year: number;
        path: string[];
    }[];
}

export interface Opportunity {
    id: number;
    title: string;
    description: string;
    requiredSkills: string[];
    wildcardCandidate: Employee;
}

export interface Challenge {
    id: number;
    title: string;
    description: string;
    duration: string;
}

export interface TalentEcho {
    id: number;
    personName: string;
    action: string;
    impact: string;
    metric: string;
}

export interface SimulationResult {
    employeeName: string;
    potentialScore: number;
    justification: string;
    isWildcard: boolean;
}
