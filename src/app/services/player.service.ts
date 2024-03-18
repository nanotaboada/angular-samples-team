import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers(): Observable<Player[]> {
    return of([
      {
        id: "1",
        firstName: "Damián",
        middleName: "Emiliano",
        lastName: "Martínez",
        dateOfBirth: new Date("1992-09-02T00:00:00.000Z"),
        squadNumber: 23,
        position: "Goalkeeper",
        abbrPosition: "GK",
        team: "Aston Villa FC",
        league: "Premier League",
        starting11: true
      },
      {
        id: "2",
        firstName: "Nahuel",
        middleName: "",
        lastName: "Molina",
        dateOfBirth: new Date("1998-04-06T00:00:00.000Z"),
        squadNumber: 26,
        position: "Right-Back",
        abbrPosition: "RB",
        team: "Atlético Madrid",
        league: "La Liga",
        starting11: true
      },
      {
        id: "3",
        firstName: "Cristian",
        middleName: "Gabriel",
        lastName: "Romero",
        dateOfBirth: new Date("1998-04-27T00:00:00.000Z"),
        squadNumber: 13,
        position: "Centre-Back",
        abbrPosition: "CB",
        team: "Tottenham Hotspur",
        league: "Premier League",
        starting11: true
      },
      {
        id: "4",
        firstName: "Nicolás",
        middleName: "Hernán Gonzalo",
        lastName: "Otamendi",
        dateOfBirth: new Date("1988-02-12T00:00:00.000Z"),
        squadNumber: 19,
        position: "Centre-Back",
        abbrPosition: "CB",
        team: "SL Benfica",
        league: "Liga Portugal",
        starting11: true
      },
      {
        id: "5",
        firstName: "Nicolás",
        middleName: "Alejandro",
        lastName: "Tagliafico",
        dateOfBirth: new Date("1992-08-31T00:00:00.000Z"),
        squadNumber: 3,
        position: "Left-Back",
        abbrPosition: "LB",
        team: "Olympique Lyon",
        league: "Ligue 1",
        starting11: true
      },
      {
        id: "6",
        firstName: "Ángel",
        middleName: "Fabián",
        lastName: "Di María",
        dateOfBirth: new Date("1988-02-14T00:00:00.000Z"),
        squadNumber: 11,
        position: "Right Winger",
        abbrPosition: "LW",
        team: "SL Benfica",
        league: "Liga Portugal",
        starting11: true
      },
      {
        id: "7",
        firstName: "Rodrigo",
        middleName: "Javier",
        lastName: "de Paul",
        dateOfBirth: new Date("1994-05-24T00:00:00.000Z"),
        squadNumber: 7,
        position: "Central Midfield",
        abbrPosition: "CM",
        team: "Atlético Madrid",
        league: "La Liga",
        starting11: true
      },
      {
        id: "8",
        firstName: "Enzo",
        middleName: "Jeremías",
        lastName: "Fernández",
        dateOfBirth: new Date("2001-01-17T00:00:00.000Z"),
        squadNumber: 24,
        position: "Central Midfield",
        abbrPosition: "CM",
        team: "Chelsea FC",
        league: "Premier League",
        starting11: true
      },
      {
        id: "9",
        firstName: "Alexis",
        middleName: "",
        lastName: "Mac Allister",
        dateOfBirth: new Date("1998-12-24T00:00:00.000Z"),
        squadNumber: 20,
        position: "Central Midfield",
        abbrPosition: "CM",
        team: "Liverpool FC",
        league: "Premier League",
        starting11: true
      },
      {
        id: "10",
        firstName: "Lionel",
        middleName: "Andrés",
        lastName: "Messi",
        dateOfBirth: new Date("1987-06-24T00:00:00.000Z"),
        squadNumber: 10,
        position: "Right Winger",
        abbrPosition: "RW",
        team: "Inter Miami CF",
        league: "Major League Soccer",
        starting11: true
      },
      {
        id: "11",
        firstName: "Julián",
        middleName: "",
        lastName: "Álvarez",
        dateOfBirth: new Date("2000-01-31T00:00:00.000Z"),
        squadNumber: 9,
        position: "Centre-Forward",
        abbrPosition: "CF",
        team: "Manchester City",
        league: "Premier League",
        starting11: true
      }
    ]);
  }
}
