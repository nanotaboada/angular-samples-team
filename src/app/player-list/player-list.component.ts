import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule
  ],
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  displayedColumns: string[] = ['name', 'squadNumber', 'position', 'team', 'league'];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
    });
  }
}
