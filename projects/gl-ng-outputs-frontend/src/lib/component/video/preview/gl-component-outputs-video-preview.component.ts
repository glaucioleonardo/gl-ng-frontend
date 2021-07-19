import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { IPlayerData, TVideoPreload } from './gl-component-outputs-video-preview.interface';
import { GlComponentOutputsVideoPreviewService } from './gl-component-outputs-video-preview.service';

@Component({
  selector: 'gl-component-outputs-video-preview',
  templateUrl: './gl-component-outputs-video-preview.component.html',
  styleUrls: ['./gl-component-outputs-video-preview.component.scss']
})
export class GlComponentOutputsVideoPreviewComponent {
  @Input() id = 'single-video';
  @Input() masterVideo = false;
  @Input() showControls = false;
  @Input() showVideoSpeed = true;
  @Input() showCurrentTime = true;
  @Input() showLeftTime = false;
  @Input() showTotalTime = true;
  @Input() showMute = true;
  @Input() showVolume = true;
  @Input() showClosedCaption = false;
  @Input() fitVideoToContainer = true;
  @Input() squareActive = true;

  @Input() roundedStyle = true;

  @Input() videoPreload: TVideoPreload = 'auto';

  @Input() showBackground = true;
  @Input() backgroundSquare = 'assets/img/background/project-video-background-portrait.png';
  @Input() backgroundWidescreen = 'assets/img/background/project-video-background-landscape.png';

  @Input() sourceMp4: string;
  @Input() sourceWebM: string;

  @Output() playerData$$: EventEmitter<IPlayerData> = new EventEmitter();

  playerReady = false;

  constructor(public service: GlComponentOutputsVideoPreviewService) { }

  onPlayerReady(event: VgApiService, video: HTMLVideoElement): void {
    setTimeout(() => {
      this.playerReady = true;
      video.volume = 0.5;

      const playerData: IPlayerData = {
        player: video,
        id: this.id,
        master: this.masterVideo
      };
      this.playerData$$.emit(playerData);
      this.service.players.push(playerData);
    }, 100);
  }

}
