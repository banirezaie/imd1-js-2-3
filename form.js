
const tweetForm = document.querySelector("#tweetForm")
const tweetsContainer = document.querySelector("#tweets")

tweetForm.addEventListener("submit", function (e) {
//   alert("submitted!!")
//   console.log("submitted")

//              and without action it will refresh your page!!!
  e.preventDefault()     //frist element ffor our page
  console.log("submitted")

//   const usernameInput = document.querySelectorAll("input")[0]
//   console.log(document.querySelectorAll("input"))
//   const tweetInput = document.querySelectorAll("input")[1]
//   console.log(usernameInput.value, tweetInput.value)


/*********                    ELEMENTS                         *************/

    // console.dir(tweetForm)   // تمام فاکشن هایی که میتونیم روی ان اجرا کنیم
    // console.log(tweetForm)   // تمام چیز هایی که در فرم وجود داره

// instead, please check: console.dir(tweetForm) => elements!!
//   this is one reason we use name :)

  console.log(tweetForm.elements.username.value)
  console.log(tweetForm.elements.tweet.value)

  const usernameInput = tweetForm.elements.username
  const tweetInput = tweetForm.elements.tweet



           /*         <li> <b>username.value</b> </li>             */

    // const newTweet = document.createElement("li")
    // const bTag = document.createElement("b")

    // bTag.append(usernameInput.value)
    // /*     <b>username.value</b>     */
    // newTweet.append(` _ ${tweetInput.value}`)
    // /*     <b>username.value</b> _ tweet.value   */
    // tweetsContainer.appendChild(newTweet)


  addTweet(usernameInput.value, tweetInput.value)

  /*   خالی شدن ولیو ها :)   */
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
