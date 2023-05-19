export interface ArchDataModel {
    id: number,
    name: string,
    yearBuilt: string,
    style: string,
    buildingType: string,
    scale: string,
    location: string,
    continent: string,
    descriptionURL: string,
    imageURL: string,
    codename: string,
    color: string
}

export enum Category {
    ALPHABETICAL,
    CHRONOLOGICAL,
    LOCATION,
    PROGRAMMATIC,
    STYLE
}

export enum Programmatic {
    CULTURAL = 'Cultural',
    RELIGIOUS = 'Religious',
    RESIDENTIAL = 'Residential'
}

export enum Location {
    ASIA = 'Asia',
    EUROPE = 'Europe'
}