export interface CatalogItemTableProps {
    volume: string; 
    taste: string; 
    price: string | number;
}

export interface CatalogItemProps {
    title: string;
    table: CatalogItemTableProps;
    imgSrc: string;
    id: number;
}