export interface IMenuButton {
    src: string;
    id: string;
    alt: string;
    canReadonly?: boolean;
    readonly?: boolean;
    alwaysVisible?: boolean;
    callback?(event?: any): void;
}
