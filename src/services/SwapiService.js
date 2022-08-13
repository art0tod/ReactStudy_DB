

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
  async getAllPeople() {
    const res = await this.gerResource(`/people/`);
    return  res.results;
  };
  async getAllPlanets() {
    const res = await this.gerResource(`/planets/`);
    return  res.results;
  };
  async getAllStarships() {
    const res = await this.gerResource(`/starships/`);
    return  res.results;
  };

  getPerson(id) {
    return this.gerResource(`/people/${id}/`)
  }
  getPlanet(id) {
    return this.gerResource(`/planets/${id}/`)
  }
  getStarship(id) {
    return this.gerResource(`/starships/${id}/`)
  }
}

const swapi = new SwapiService();

swapi.getAllPlanets().then((planets) => {
  planets.forEach((p) =>{
    console.log(p.name)
  })
});