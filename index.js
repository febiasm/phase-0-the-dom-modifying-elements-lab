// Write your code here!

const main = document.querySelector("#main")

main.remove()

var newHeader = document.createElement("h1")

newHeader.id = "victory"

newHeader.innerHTML ="trevor is the champion"

document.body.prepend(newHeader)