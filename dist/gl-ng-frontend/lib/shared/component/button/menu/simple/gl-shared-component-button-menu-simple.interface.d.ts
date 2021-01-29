export interface IMenuButton {
    src: string;
    id: string;
    alt: string;
    canReadonly?: boolean;
    readonly?: boolean;
    alwaysVisible?: boolean;
    hide?: boolean;
    callback?(event?: any): void;
}
