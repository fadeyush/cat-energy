export interface PropsProperties {
    children?: React.ReactNode;
    className?: string;
    colorType: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export enum buttonTypes {
    green = 'green',
    gray = 'gray'
}