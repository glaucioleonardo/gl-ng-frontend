import { Component, Input, ElementRef, HostBinding, ViewEncapsulation, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { VgApiService, VgControlsHiddenService, VgStates } from '@videogular/ngx-videogular/core';
export class VgControlsComponent {
    // @ts-ignore
    constructor(API, ref, hidden) {
        this.API = API;
        this.hidden = hidden;
        this.isAdsPlaying = 'initial';
        this.hideControls = false;
        this.vgAutohide = false;
        this.vgAutohideTime = 3;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    ngOnInit() {
        this.mouseMove$ = fromEvent(this.API.videogularElement, 'mousemove');
        this.subscriptions.push(this.mouseMove$.subscribe(this.show.bind(this)));
        this.touchStart$ = fromEvent(this.API.videogularElement, 'touchstart');
        this.subscriptions.push(this.touchStart$.subscribe(this.show.bind(this)));
        this.mouseClick$ = fromEvent(this.API.videogularElement, 'click');
        this.subscriptions.push(this.mouseClick$.subscribe(this.show.bind(this)));
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
        }
    }
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this)));
        this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this)));
        this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this)));
        this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this)));
    }
    ngAfterViewInit() {
        if (this.vgAutohide) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    onPlay() {
        if (this.vgAutohide) {
            this.hide();
        }
    }
    onPause() {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
    }
    onStartAds() {
        this.isAdsPlaying = 'none';
    }
    onEndAds() {
        this.isAdsPlaying = 'initial';
    }
    hide() {
        if (this.vgAutohide) {
            clearTimeout(this.timer);
            this.hideAsync();
        }
    }
    show() {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
        if (this.vgAutohide) {
            this.hideAsync();
        }
    }
    hideAsync() {
        if (this.API.state === VgStates.VG_PLAYING) {
            this.timer = setTimeout(() => {
                this.hideControls = true;
                this.hidden.state(true);
            }, this.vgAutohideTime * 1000);
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
VgControlsComponent.decorators = [
    { type: Component, args: [{
                selector: 'vg-controls',
                encapsulation: ViewEncapsulation.None,
                template: `<ng-content></ng-content>`,
                styles: [`
      vg-controls {
        position: absolute;
        display: flex;
        width: 100%;
        height: 50px;
        z-index: 300;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-transition: bottom 1s;
        -khtml-transition: bottom 1s;
        -moz-transition: bottom 1s;
        -ms-transition: bottom 1s;
        transition: bottom 1s;
      }
      vg-controls.hide {
        bottom: -50px;
      }
    `]
            },] }
];
/** @nocollapse */
VgControlsComponent.ctorParameters = () => [
    { type: VgApiService },
    { type: ElementRef },
    { type: VgControlsHiddenService }
];
VgControlsComponent.propDecorators = {
    isAdsPlaying: [{ type: HostBinding, args: ['style.pointer-events',] }],
    hideControls: [{ type: HostBinding, args: ['class.hide',] }],
    vgFor: [{ type: Input }],
    vgAutohide: [{ type: Input }],
    vgAutohideTime: [{ type: Input }]
};
//# sourceMappingURL=vg-controls.component.js.map