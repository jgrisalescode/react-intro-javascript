console.log("Destructuring")

const persona = {
  name: "Tony",
  age: 45,
  password: "Ironman"
}

console.log(persona.name)
console.log(persona.age)
console.log(persona.password)

const { name, age: age2, password } = persona
console.log(name, age2, password)

const returnPersona = ({ name, age, range = "Captain" }) => {
  console.log(name, age, range)
}

returnPersona(persona)

const useContext = ({ password, name, age, range }) => {
  return {
    keyName: name,
    years: age
  }
}

const { keyName, years } = useContext(persona)
console.log(keyName, years)
