export interface Item {
    name: string[];
    releaseDate: string[];
    type: string[];
    isCraftable: string[];
    availability: string[];
    [key: string]: string[];
}