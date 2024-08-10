const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

// const generateJoke = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://api.chucknorris.io/jokes/random");

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (this.status === 200) {
//         // console.log(JSON.parse(this.responseText).value);
//         jokeEl.innerHTML = JSON.parse(this.responseText).value;
//       } else {
//         jokeEl.innerHTML = "Something Went Wrong (Not Funny)";
//       }
//     }
//   };

//   xhr.send();
// };
const generateJoke = () => {
  // Specify the API endpoint for user data
  const apiUrl = "https://api.chucknorris.io/jokes/random";

  // Make a GET request using the Fetch API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((userData) => {
      // Process the retrieved user data
      jokeEl.innerHTML = userData.value;
    })
    .catch((error) => {
      //console.error('Error:', error);
      jokeEl.innerHTML = "Something Went Wrong (Not Funny)";
    });
};

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
