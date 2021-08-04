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
  @Input() showPlayPause = true;
  @Input() showCurrentTime = true;
  @Input() showLeftTime = false;
  @Input() showTotalTime = true;
  @Input() showMute = true;
  @Input() showVolume = true;
  @Input() showClosedCaption = false;
  @Input() fitVideoToContainer = true;
  @Input() squareActive = true;
  @Input() borderRadius = true;
  @Input() loop = false;
  @Input() muted = false;
  @Input() autoplay = false;

  @Input() videoPreload: TVideoPreload = 'auto';

  @Input() showBackground = true;
  @Input() backgroundSquare = 'assets/img/background/project-video-background-portrait.png';
  @Input() backgroundWidescreen = 'assets/img/background/project-video-background-landscape.png';

  @Input() sourceImage: string;
  @Input() sourceMp4: string;
  @Input() sourceWebM: string;

  @Input() galleryPreview = false;

  @Output() playerData$: EventEmitter<IPlayerData> = new EventEmitter();
  @Output() Playing$: EventEmitter<boolean> = new EventEmitter();

  playerReady = false;

  constructor(public service: GlComponentOutputsVideoPreviewService) { }

  onPlayerReady(event: VgApiService, video: HTMLVideoElement): void {
    setTimeout(async () => {
      this.playerReady = true;

      if (!this.galleryPreview) {
        if (!this.autoplay) {
          video.pause();
        }

        const playerData: IPlayerData = {
          player: video,
          id: this.id,
          master: this.masterVideo
        };
        this.playerData$.emit(playerData);

        const exist = this.service.players.filter(x => x.id === this.id).length > 0;
        video.onplaying = () => {
          this.Playing$.emit(!video.paused);
        };

        if (!exist) {
          this.service.players.push(playerData);
        }
      }
    }, 100);
  }
  onPlayPause(id: string, video: HTMLVideoElement): void {
    this.Playing$.emit(!video.paused);
    this.service.stopOther(id);

    if (!this.galleryPreview && !this.muted) {
      video.muted = false;
      video.volume = 0.5;
    }
  }
}
