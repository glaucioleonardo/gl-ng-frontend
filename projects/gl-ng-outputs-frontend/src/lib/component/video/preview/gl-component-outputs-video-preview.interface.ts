export interface IPlayerData {
  player: HTMLVideoElement;
  id: string;
  master: boolean;
}

export type TVideoPreload = 'auto' | 'metadata' | 'none';
