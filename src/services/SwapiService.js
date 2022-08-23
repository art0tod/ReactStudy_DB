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
  async getAllPlanets() {
    const res = await this.gerResource(`/planets/`);
    return  res.results.map(this._transformPlanet);
  };
  async getAllStarships() {
    const res = await this.gerResource(`/starships/`);
    return  res.results.map(this._transformStarship);
  };

  getPerson = (id) => {
    const person = await this.gerResource(`/people/${id}/`)
    return this._transformPerson(person)
  }
  async getPlanet(id) {
    const planet = await this.gerResource(`/planets/${id}/`)
    return this._transformPlanet(planet);
  }
  async getStarship(id) {
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
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
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
