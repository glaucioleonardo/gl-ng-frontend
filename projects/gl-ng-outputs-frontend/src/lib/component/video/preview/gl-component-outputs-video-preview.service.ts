import { Injectable } from '@angular/core';
import { IPlayerData } from './gl-component-outputs-video-preview.interface';

@Injectable({
  providedIn: 'root'
})
export class GlComponentOutputsVideoPreviewService {
  players: IPlayerData[] = [];

  constructor() { }

  stopAll(): void {
    for (const item of this.players) {
      item.player.pause();
    }
  }
  stopOther(id: string): void {
    const current = this.players.filter(x => x.id === id);
    const exists = current.length > 0;
    const other = this.players.filter(x => x.id !== id);

    if (exists) {
      current[0].player.muted = false;
    }

    for (const item of other) {
      item.player.pause();
      item.player.muted = true;
    }
  }
}
