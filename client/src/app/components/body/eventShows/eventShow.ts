export interface IZone {
    id: number,
    name: string,
    ticketPrice: number
}

export interface IEventShow {
    id: number,
    imageSrc: string,
    category: string,
    name: string,
    venueName: string,
    venueLocation: string,
    date: string,
    zones: IZone[]
}