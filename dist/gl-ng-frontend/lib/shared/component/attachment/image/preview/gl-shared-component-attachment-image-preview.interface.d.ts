export interface IImageString {
    value: string;
}
export interface IImageUpdate {
    image: string;
    resize?: boolean;
    quality?: number;
    maxWidth?: number;
    maxHeight?: number;
}
