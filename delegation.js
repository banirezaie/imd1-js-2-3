const lis = document.querySelectorAll("li")
for (let li of lis) {
  li.addEventListener("click", function () {
    li.remove()
  })
}
// be careful that it doesn't work properly, so what we do is:

const tweetsContainer = document.querySelector("#tweets")

const tweetForm = document.querySelector("#tweetForm")
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const usernameInput = tweetForm.elements.username
  const tweetInput = tweetForm.elements.tweet
  addTweet(usernameInput.value, tweetInput.value)
  usernameInput.value = ""
  tweetInput.value = ""
})

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li")
  const bTag = document.createElement("b")
  bTag.append(username)
  newTweet.append(bTag)
  newTweet.append(`- ${tweet}`)
  tweetsContainer.append(newTweet)
}

tweetsContainer.addEventListener("click", function (e) {
  console.log("click on UL")
  console.dir(e.target)
  e.target.nodeName === "LI" && e.target.remove()
})
