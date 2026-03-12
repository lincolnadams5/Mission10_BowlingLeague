// frontend\src\types\Bowler.ts
// This file defines the TypeScript types for a Bowler and their associated Team.

type Team = {
    teamID: number,
    teamName: string
}

export type Bowler = {
    bowlerID: number,
    bowlerFirstName: string,
    bowlerLastName: string,
    bowlerMiddleInit: string | null,
    bowlerAddress: string,
    bowlerCity: string,
    bowlerState: string,
    bowlerZip: string,
    bowlerPhoneNumber: string,
    teamID: number,
    team: Team
}