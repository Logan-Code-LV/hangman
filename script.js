$(document).ready(function() {
  const words = [
    "the",
    "and",
    "you",
    "that",
    "was",
    "for",
    "are",
    "with",
    "his",
    "they",
    "this",
    "have",
    "from",
    "one",
    "had",
    "word",
    "but",
    "not",
    "what",
    "all",
    "were",
    "when",
    "your",
    "can",
    "said",
    "there",
    "use",
    "each",
    "which",
    "she",
    "how",
    "their",
    "will",
    "other",
    "about",
    "out",
    "many",
    "then",
    "them",
    "these",
    "some",
    "her",
    "would",
    "make",
    "like",
    "him",
    "into",
    "time",
    "has",
    "look",
    "two",
    "more",
    "write",
    "see",
    "number",
    "way",
    "could",
    "people",
    "than",
    "first",
    "water",
    "been",
    "call",
    "who",
    "oil",
    "its",
    "now",
    "find",
    "long",
    "down",
    "day",
    "did",
    "get",
    "come",
    "made",
    "may",
    "part"
  ]

  var filtered = words.filter(item => item.length >= 3)
  console.log(filtered)
  var word = filtered[Math.floor(Math.random() * filtered.length)]
  console.log(word)

  var answer = []
  for (var i = 0; i < word.length; i++) {
    answer[i] = "_"
  }

  lives = 5

  var remainingLetters = word.length
  $("button").on("click", function(e) {
    this.disabled = true

    var value = $(this)
      .html()
      .toLowerCase()
    console.log(value)

    for (var j = 0; j < word.length; j++) {
      if (word[j] === value) {
        alert("correct")
        answer[j] = value
        document.querySelector("#answer").innerHTML = answer.join("")
        console.log(answer)
      }
      if (word != value) {
        alert("incorrect")
        lives = lives - 1
        console.log(lives)
        break
      }
    }
    if (lives < 0) {
      prompt("you lose")
    }
  })
})
