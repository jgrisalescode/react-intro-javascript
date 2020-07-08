import { heroes, getHeroeById } from "./data/heroes"

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(5)
    if (heroe) {
      console.log("3 seconds later ...")
      resolve(heroe)
    } else {
      reject(new Error("Heroe not found"))
    }
  }, 3000)
})

promise
  .then(heroe => {
    console.table(heroe)
  })
  .catch(err => {
    console.warn(err)
  })

const getHeroeByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id)
      if (heroe) {
        console.log("2 seconds later ...")
        resolve(heroe)
      } else {
        reject(new Error("Heroe not found"))
      }
    }, 2000)
  })
}

getHeroeByIdAsync(4)
  .then(heroe => {
    console.table(heroe)
  })
  .catch(err => {
    console.warn(err)
  })
