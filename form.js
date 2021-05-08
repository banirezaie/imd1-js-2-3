// const tweetForm = document.querySelector("#tweetForm")
// const tweetsContainer = document.querySelector("#tweets")
// tweetForm.addEventListener("submit", function (e) {
//   alert("submitted!!")
//   console.log("submitted")
//              and without action it will refresh your page!!!
//   e.preventDefault()
//   console.log("submitted")

//   const usernameInput = document.querySelectorAll("input")[0]
//   const tweetInput = document.querySelectorAll("input")[1]
//   console.log(usernameInput.value, tweetInput.value)

//instead, please check: console.dir(tweetForm) => elements!!
//   this is one reason we use name :)
//   console.log(tweetForm.elements.username.value)
//   console.log(tweetForm.elements.tweet.value)

//   const usernameInput = tweetForm.elements.username
//   const tweetInput = tweetForm.elements.tweet
//   addTweet(usernameInput.value, tweetInput.value)
//   usernameInput.value = ""
//   tweetInput.value = ""
// })

// const addTweet = (username, tweet) => {
//   const newTweet = document.createElement("li")
//   const bTag = document.createElement("b")
//   bTag.append(username)
//   newTweet.append(bTag)
//   newTweet.append(`- ${tweet}`)
//   tweetsContainer.append(newTweet)
// }
