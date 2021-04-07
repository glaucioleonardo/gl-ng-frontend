export interface IInitialFinalRange {
    initial: number;
    final: number;
}
export interface IPageButtons {
    page: number;
    active: boolean;
}
export interface IPaging {
    event: MouseEvent;
    type: TPagingType;
}
export declare type TPagingType = 'first' | 'next' | 'previous' | 'last';
export interface IItemsPerPage {
    title: string;
    innerValue: string;
    value: string;
    class: string;
    pageSize: number;
}
