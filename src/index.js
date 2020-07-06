console.log("Destructuring Arrays")

const characters = ["Goku", "Vegeta", "Trunks"]

console.log(characters[0])
console.log(characters[1])
console.log(characters[2])

const [kakaroto, sayayin, superSayayin] = characters

console.log(kakaroto, sayayin, superSayayin)

const retunrArray = () => {
  return ["ABC", 123]
}

const [letters, numbers] = retunrArray()
console.log(letters, numbers)

// Homework

const useState = value => {
  return [
    value,
    () => {
      console.log("Hello World")
    }
  ]
}

const [name, setName] = useState("Goku")
console.log(name)
setName()
