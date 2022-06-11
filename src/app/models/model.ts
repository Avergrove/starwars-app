export interface Category<T extends Item>{
    count: string;
    next: string;
    previous: string;
    category: string;

    results: T[];
}

export interface PeopleMeta extends Category<People>{
    category: "people";
}

export interface FilmMeta extends Category<Film>{
    category: "film";
}

export interface SpeciesMeta extends Category<Species>{
    category: "species";
}

export interface StarshipMeta extends Category<Starship>{
    category: "starships";
}

export interface VehicleMeta extends Category<Vehicle>{
    category: "vehicle";
}

export interface PlanetMeta extends Category<Planet>{
    category: "planet";
}

export interface Item{
    category: string;

    created: string[];
    edited: string[];
    url: string;
}

export interface People extends Item{
    category: "people";
    name: string;
    height: string;
    mass: number;
    hair_color: string;
    skin_color: string;
    birth_year: string;
    gender: string;

    homeworld: string; 
    films: string[];   
    species: string[]; 
    vehicles: string[];
    starships: string[];
}



export interface Film extends Item{
    category: "film";
    
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;

    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
}

export interface Species extends Item{
    category: "species";
    
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;

    people: string[];
    films: string[];
}

export interface Starship extends Item{
    category: "starship";
    
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    
    pilots: string[];
    films: string[];
}

export interface Vehicle extends Item{
    category: "vehicle";
    
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;

    pilots: string[];
    films: string[];
}

export interface Planet extends Item{
    category: "planet";
    
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
}