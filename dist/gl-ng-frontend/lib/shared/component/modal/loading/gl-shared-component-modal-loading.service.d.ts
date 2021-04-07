export declare class GlSharedComponentModalLoadingService {
    private _defaultMessage;
    defaultMessage: string;
    _loadingStatus: string;
    _showLoading: boolean;
    _mainLoading: HTMLDivElement;
    constructor();
    checkElement(): Promise<unknown>;
    setup(mainLoading: HTMLDivElement): void;
    hide(): void;
    show(status?: string): void;
    status(message: any): void;
}
