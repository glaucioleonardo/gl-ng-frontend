import { Component, ElementRef, HostListener, Input, ViewEncapsulation, } from '@angular/core';
import { VgApiService, VgStates } from '@videogular/ngx-videogular/core';
export class VgPlayPauseComponent {
    constructor(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = VgStates.VG_PAUSED;
        this.elem = ref.nativeElement;
    }
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
        }
    }
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
    }
    onClick() {
        this.playPause();
    }
    onKeyDown(event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.playPause();
        }
    }
    playPause() {
        const state = this.getState();
        switch (state) {
            case VgStates.VG_PLAYING:
                this.target.pause();
                break;
            case VgStates.VG_PAUSED:
            case VgStates.VG_ENDED:
                this.target.play();
                break;
        }
    }
    getState() {
        this.ariaValue = this.target ? this.target.state : VgStates.VG_PAUSED;
        return this.ariaValue;
    }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
VgPlayPauseComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-play-pause',
                encapsulation: ViewEncapsulation.None,
                template: ` <div
    class="icon"
    [class.vg-icon-pause]="getState() === 'playing'"
    [class.vg-icon-play_arrow]="
      getState() === 'paused' || getState() === 'ended'
    "
    tabindex="0"
    role="button"
    [attr.aria-label]="getState() === 'paused' ? 'play' : 'pause'"
    [attr.aria-valuetext]="ariaValue"
  ></div>`,
                styles: [`
      vg-play-pause {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: flex;
        justify-content: center;
        height: 50px;
        width: 50px;
        cursor: pointer;
        color: white;
        line-height: 50px;
      }
      vg-play-pause .icon {
        pointer-events: none;
      }
    `]
            },] }
];
/** @nocollapse */
VgPlayPauseComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgPlayPauseComponent.propDecorators = {
    vgFor: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
//# sourceMappingURL=vg-play-pause.component.js.map