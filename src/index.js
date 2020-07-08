const active = true

let message = ""

if (active) {
  message = "Acrtive"
} else {
  message = "Inactive"
}

console.log(message)

const message2 = active ? "Active" : "Inactive"
console.log(message2)

const message3 = active && "Active" // Without else
console.log(message3)
