export interface PageHederItemProps {
    name: string;
    link?: string;
    onClick: () => void;
}

export enum Pages {
    about = '/about',
    catalog = '/catalog',
    program = '/program',
    error = '/error',
    login = '/login'
}