export class MetaObject {
    count !: string;
    next !: string;
    previous !: string;
}

export class ItemObject {
    category !: String;
    name !: String;
    created !: string[];
    edited !: string[];
    url !: string;

}

export class PeopleMeta extends MetaObject{
    results !: People[];
}


export class People extends ItemObject{
    override category = "people";
    height!: string;
    mass!: number;
    hair_color!: string;
    skin_color!: string;
    birth_year!: string;
    gender!: string;

    homeworld!: string; 
    films!: string[];   
    species!: string[]; 
    vehicles!: string[];
    starships!: string[];
}

export interface FilmMeta extends MetaObject {
    results: Film[];
}

export class Film extends ItemObject {
    override category = "film";
    
    title!: string;
    override name = this.title;
    episode_id!: string;
    opening_crawl!: string;
    director!: string;
    producer!: string;
    release_date!: string;

    characters!: string[];
    planets!: string[];
    starships!: string[];
    vehicles!: string[];
    species!: string[];
}



export class SpeciesMeta extends MetaObject {
    results !: Species[];
}

export class Species extends ItemObject {
    override category = "species";
    
    classification!: string;
    designation!: string;
    average_height!: string;
    skin_colors!: string;
    hair_colors!: string;
    eye_colors!: string;
    average_lifespan!: string;
    homeworld!: string;
    language!: string;

    people!: string[];
    films!: string[];
}

export class StarshipMeta extends MetaObject {
    results!: Starship[];
}

export class Starship extends ItemObject{
    override category = "starship";
    
    model!: string;
    manufacturer!: string;
    cost_in_credits!: string;
    length!: string;
    max_atmosphering_speed!: string;
    crew!: string;
    passengers!: string;
    cargo_capacity!: string;
    consumables!: string;
    hyperdrive_rating!: string;
    MGLT !: string;
    starship_class!: string;
    
    pilots!: string[];
    films!: string[];
}

export class VehicleMeta extends MetaObject{
    results!: Vehicle[];
}

export class Vehicle extends ItemObject{
    override category = "vehicle";
    
    model!: string;
    manufacturer!: string;
    cost_in_credits!: string;
    length!: string;
    max_atmosphering_speed!: string;
    crew!: string;
    passengers!: string;
    cargo_capacity!: string;
    consumables!: string;
    vehicle_class!: string;

    
    pilots!: string[];
    films!: string[];
}

export class PlanetMeta extends MetaObject{
    results!: Planet[];
}

export class Planet extends ItemObject{
    override category = "planet";
    
    rotation_period!: string;
    orbital_period!: string;
    diameter!: string;
    climate!: string;
    gravity!: string;
    terrain!: string;
    surface_water!: string;
    population!: string;
    residents!: string[];
    films!: string[];
}