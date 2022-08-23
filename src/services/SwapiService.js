export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async gerResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }
  getAllPeople = async () => {
    const res = await this.gerResource(`/people/`);
    return  res.results.map(this._transformPerson);

  };
  getAllPlanets = async () => {
    const res = await this.gerResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  };
  getAllStarships = async () => {
    const res = await this.gerResource(`/starships/`);
    return  res.results.map(this._transformStarship);
  };

  getPerson = async (id) => {
    const person = await this.gerResource(`/people/${id}/`)
    console.log(person);
    return this._transformPerson(person)
  }
  getPlanet = async (id) => {
    const planet = await this.gerResource(`/planets/${id}/`)
    return this._transformPlanet(planet);
  }
  getStarship = async (id) => {
    const starship = await this.gerResource(`/starships/${id}/`)
    return this._transformStarship(starship)
  }

  _extractID(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1]
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractID(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }
  _transformPerson = (person) => {
    return {
      id: this._extractID(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
  _transformStarship = (starship) => {
    return {
      id: this._extractID(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }
}
