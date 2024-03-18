// src/app/models/player.model.ts

export interface Player {
    id: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    dateOfBirth: Date;
    squadNumber: number;
    position: string;
    abbrPosition: string;
    team: string;
    league: string;
    starting11: boolean;
  }
