import { heroes, owners } from "./data/heroes"
console.log(heroes)

const getHeroById = id => {
  return heroes.find(hero => hero.id === id)
}

console.log(getHeroById(2))

const getHeroesByOwner = owner => {
  return heroes.filter(heroes => heroes.owner === owner)
}

console.log(getHeroesByOwner("DC"))
console.log(getHeroesByOwner("Marvel"))
