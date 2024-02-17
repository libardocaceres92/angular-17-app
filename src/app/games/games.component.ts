import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Output() addFavoriteEvent = new EventEmitter<string>(); 
  

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
  @Input() username = '';

  games = [
    {
      id: 1,
      name: 'Uncharted 4' 
    },
    {
      id: 2,
      name: 'Fifa 4' 
    },
    {
      id: 3,
      name: 'Crash 4' 
    }
  ]
}
