export interface PageHederItemProps {
    name: string;
    link: string;
}

export enum Pages {
    about = '/about',
    catalog = '/catalog',
    program = '/program',
    error = '/error',
}

export interface HeaderNavigationProps {
    location: string;
}