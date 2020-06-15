export interface IMenuItem {
    src?: string;
    href: string;
    alt: string;
    content: string;
    absolute?: boolean;
    class?: 'translucid' | 'dark' | '';
}
