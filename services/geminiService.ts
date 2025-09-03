
import { GoogleGenAI, Type } from "@google/genai";
import type { Employee, SimulationResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            employeeName: {
                type: Type.STRING,
                description: "The full name of the employee.",
            },
            potentialScore: {
                type: Type.NUMBER,
                description: "A score from 0 to 100 representing the employee's potential for this specific scenario.",
            },
            justification: {
                type: Type.STRING,
                description: "A detailed explanation of why this employee is a good fit, referencing their profile and hidden talents.",
            },
            isWildcard: {
                type: Type.BOOLEAN,
                description: "True if this employee is a non-obvious but high-potential choice, false otherwise.",
            },
        },
        required: ["employeeName", "potentialScore", "justification", "isWildcard"],
    },
};

export const simulateRolePotential = async (scenario: string, employees: Employee[]): Promise<SimulationResult[]> => {
    try {
        const employeeProfiles = employees.map(e => 
            `- ${e.name}, Role: ${e.role}, Summary: ${e.profileSummary}, Hidden Talents: [${e.hiddenTalents.join(', ')}]`
        ).join('\n');

        const prompt = `
            You are "Latent", an AI engine that identifies hidden employee potential.
            Your task is to analyze the following list of employee profiles and predict their success in a specific scenario.

            **Scenario:** "${scenario}"

            **Employee Profiles:**
            ${employeeProfiles}

            **Instructions:**
            1.  Carefully analyze each employee's profile, including their current role, summary, and especially their "Hidden Talents".
            2.  Identify the top 3 employees best suited for this scenario.
            3.  One of your top 3 picks **MUST** be a "wildcard" candidate – someone whose current role doesn't obviously fit the scenario, but whose hidden talents make them a surprisingly strong choice.
            4.  For each of the 3 selected employees, provide a potential score (0-100) and a strong justification.
            5.  Return the results in the specified JSON format. Do not include any text outside of the JSON structure.
        `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.7,
            },
        });
        
        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText) as SimulationResult[];

        // Sort by potential score descending
        return result.sort((a, b) => b.potentialScore - a.potentialScore);

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        // Provide a fallback or re-throw a more specific error
        throw new Error("Failed to get simulation results from AI. Please check the console for details.");
    }
};
