const tweetForm = document.querySelector("#tweetForm")
const tweetsContainer = document.querySelector("#tweets")

tweetForm.addEventListener("submit", e => {
  // alert("submitted!!")
  //   console.log("submitted")
  //              and without action it will refresh your page!!!
  e.preventDefault()
  console.log("submitted")

  //   const usernameInput = document.querySelectorAll("input")[0]
  //   const tweetInput = document.querySelectorAll("input")[1]
  //   console.log(usernameInput.value, tweetInput.value)

  //ELEMENTS:
  //instead, please check: console.dir(tweetForm) => elements!!
  console.dir(tweetForm)
  //   this is one reason we use name :)
  console.log(tweetForm.elements.username.value)
  console.log(tweetForm.elements.tweet.value)

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
  // <li><b>Farnaz</b></li>
  newTweet.append(`- ${tweet}`)
  // <li><b>Farnaz</b> - how are you</li>
    tweetsContainer.append(newTweet)
}
