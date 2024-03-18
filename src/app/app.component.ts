import { Component } from '@angular/core';
import { PlayerListComponent } from './player-list/player-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
