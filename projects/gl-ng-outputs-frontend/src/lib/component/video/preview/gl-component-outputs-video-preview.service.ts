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
    for (const item of this.players.filter(x => x.id !== id)) {
      item.player.pause();
    }
  }
}
