export enum Category{
    PEOPLE = "people",
    FILMS = "film",
    SPECIES = "species",
    STARSHIPS = "starships",
    VEHICLES = "vehicles",
    PLANETS = "planets"
}


export function mapCategoryToAPIURL(category : Category) : string{
    return urlMappings.get(category)!;
}

export function mapCategoryToDisplayStrings(category : Category) : string{
    return stringMappings.get(category)!;
}

let stringMappings = new Map<Category, string>([
    [Category.PEOPLE, "Characters"],
    [Category.FILMS, "Films"],
    [Category.SPECIES, "Species"],
    [Category.STARSHIPS, "Starships"],
    [Category.VEHICLES, "Vehicles"],
    [Category.PLANETS, "Planets"],
  ]);

let urlMappings = new Map<Category, string>([
    [Category.PEOPLE, "https://swapi.dev/api/people/"],
    [Category.FILMS, "https://swapi.dev/api/films/"],
    [Category.SPECIES, "https://swapi.dev/api/species/"],
    [Category.STARSHIPS, "https://swapi.dev/api/starships/"],
    [Category.VEHICLES, "https://swapi.dev/api/vehicles/"],
    [Category.PLANETS, "https://swapi.dev/api/planets/"],
  ]);

