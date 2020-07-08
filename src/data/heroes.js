const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC"
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel"
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC"
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC"
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel"
  }
]

const owners = ["DC", "Marvel"]

const getHeroeById = id => {
  return heroes.find(heroe => heroe.id === id)
}

const getHeroesByOwner = owner => {
  return heroes.filter(heroe => heroe.owner === owner)
}

module.exports = {
  heroes,
  owners,
  getHeroeById
}
