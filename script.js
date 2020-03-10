$(document).ready(function() {
  const words = [
    "contrast",
    "railroad",
    "excavation",
    "confidence",
    "distribute",
    "presidency",
    "girlfriend",
    "curriculum",
    "restaurant",
    "regulation"
  ]

  var filtered = words.filter(item => item.length >= 10)
  console.log(filtered)
  var word = filtered[Math.floor(Math.random() * filtered.length)]
  console.log(word)

  var answer = []
  var lives = 5
  var ar = word.split("")
  console.log(ar)

  $("button").on("click", function(e) {
    this.disabled = true
    var value = $(this)
      .html()
      .toLowerCase()
    if (ar.includes(value)) {
      document.querySelector("#answer").innerHTML = value
    } else if (word.includes() != value) {
      alert("WRONG!")
      lives = lives - 1
    }
    if (lives < 1) {
      alert("YOU LOSE!")
    }
  })
})
