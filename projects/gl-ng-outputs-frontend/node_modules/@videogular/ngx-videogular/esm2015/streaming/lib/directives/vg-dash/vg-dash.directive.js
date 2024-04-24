import { Directive, Input, Output, EventEmitter, ElementRef, } from '@angular/core';
import { VgApiService, } from '@videogular/ngx-videogular/core';
export class VgDashDirective {
    constructor(ref, API) {
        this.ref = ref;
        this.API = API;
        this.onGetBitrates = new EventEmitter();
        this.subscriptions = [];
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
        this.vgFor = this.ref.nativeElement.getAttribute('vgFor');
        this.target = this.API.getMediaById(this.vgFor);
        this.createPlayer();
    }
    ngOnChanges(changes) {
        var _a;
        ((_a = changes.vgDash) === null || _a === void 0 ? void 0 : _a.currentValue) ? this.createPlayer() : this.destroyPlayer();
    }
    createPlayer() {
        if (this.dash) {
            this.destroyPlayer();
        }
        // It's a DASH source
        if (this.vgDash &&
            (this.vgDash.indexOf('.mpd') > -1 ||
                this.vgDash.indexOf('mpd-time-csf') > -1)) {
            let drmOptions;
            if (this.vgDRMLicenseServer) {
                drmOptions = this.vgDRMLicenseServer;
                if (this.vgDRMToken) {
                    for (const drmServer in drmOptions) {
                        if (drmServer.hasOwnProperty(drmServer)) {
                            drmOptions[drmServer].httpRequestHeaders = {
                                Authorization: this.vgDRMToken,
                            };
                        }
                    }
                }
            }
            this.dash = dashjs.MediaPlayer().create();
            this.dash.updateSettings({ debug: { logLevel: dashjs.Debug.LOG_LEVEL_NONE } });
            this.dash.initialize(this.ref.nativeElement);
            this.dash.setAutoPlay(false);
            this.dash.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, () => {
                const audioList = this.dash.getBitrateInfoListFor('audio');
                const videoList = this.dash.getBitrateInfoListFor('video');
                if (audioList.length > 1) {
                    audioList.forEach((item) => (item.qualityIndex = ++item.qualityIndex));
                    audioList.unshift({
                        qualityIndex: 0,
                        width: 0,
                        height: 0,
                        bitrate: 0,
                        mediaType: 'video',
                        scanType: 'AUTO',
                    });
                    this.onGetBitrates.emit(audioList);
                }
                if (videoList.length > 1) {
                    videoList.forEach((item) => (item.qualityIndex = ++item.qualityIndex));
                    videoList.unshift({
                        qualityIndex: 0,
                        width: 0,
                        height: 0,
                        bitrate: 0,
                        mediaType: 'video',
                        scanType: 'AUTO',
                    });
                    this.onGetBitrates.emit(videoList);
                }
            });
            if (drmOptions) {
                this.dash.setProtectionData(drmOptions);
            }
            this.dash.attachSource(this.vgDash);
        }
        else {
            if (this.target) {
                this.target.pause();
                this.target.seekTime(0);
                this.ref.nativeElement.src = this.vgDash;
            }
        }
    }
    setBitrate({ mediaType, qualityIndex }) {
        if (this.dash) {
            if (qualityIndex > 0) {
                if (this.dash.getSettings()) {
                    this.dash.updateSettings({
                        streaming: {
                            abr: {
                                autoSwitchBitrate: {
                                    [mediaType]: false
                                }
                            }
                        }
                    });
                }
                const nextIndex = qualityIndex - 1;
                this.dash.setQualityFor(mediaType, nextIndex);
            }
            else {
                this.dash.updateSettings({
                    streaming: {
                        abr: {
                            autoSwitchBitrate: {
                                [mediaType]: true
                            }
                        }
                    }
                });
            }
        }
    }
    destroyPlayer() {
        if (this.dash) {
            this.dash.reset();
            this.dash = null;
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
        this.destroyPlayer();
    }
}
VgDashDirective.decorators = [
    { type: Directive, args: [{
                selector: '[vgDash]',
                exportAs: 'vgDash',
            },] }
];
/** @nocollapse */
VgDashDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: VgApiService }
];
VgDashDirective.propDecorators = {
    vgDash: [{ type: Input }],
    vgDRMToken: [{ type: Input }],
    vgDRMLicenseServer: [{ type: Input }],
    onGetBitrates: [{ type: Output }]
};
//# sourceMappingURL=vg-dash.directive.js.map