'use strict';

(function() {

  const SEARCH = "/fbla/search/";

  window.addEventListener("load", init);

  /**
   * Initialize the webpage
   */
  function init() {
    generateRandomQuestions();
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("submit1").addEventListener("click", submit1);
    document.getElementById("submit2").addEventListener("click", submit2);
    document.getElementById("submit3").addEventListener("click", submit3);
    document.getElementById("submit4").addEventListener("click", submit4);
    document.getElementById("submit5").addEventListener("click", submit5);
    document.getElementById("replay").addEventListener("click", replay);
  }

  /**
   * Starts the game
   */
  function start() {
    document.getElementById("start").classList.add("hidden");
    document.getElementById("question1").classList.remove("hidden");
  }

  /**
   * Revert to start screen
   */
  function replay() {
    let count = document.getElementById("score");
    count.textContent = "0";
    document.getElementById("results").classList.add("hidden");
    document.getElementById("start").classList.remove("hidden");
    generateRandomQuestions();
  }

  /**
   * Submit question 1
   */
  function submit1() {
    let answer = document.getElementById("answer1").value;
    let correct = document.querySelector("#question1 > p");
    if (answer.toLowerCase() === correct.textContent.toLowerCase()) {
      //correct.textContent = "Correct";
      let count = document.getElementById("score");
      count.textContent = parseInt(count.textContent) + 1;
    } else {
      //correct.textContent = "Incorrect";
    }
    const DELAY = 2000;
    setTimeout(changeQuestion2, DELAY);
  }

  /**
   * Submit question 2
   */
  function submit2() {
    let answer = document.getElementById("answer2").value;
    let correct = document.querySelector("#question2 > p");
    if (answer.toLowerCase() === correct.textContent.toLowerCase()) {
      //correct.textContent = "Correct";
      let count = document.getElementById("score");
      count.textContent = parseInt(count.textContent) + 1;
    } else {
      //correct.textContent = "Incorrect";
    }
    const DELAY = 2000;
    setTimeout(changeQuestion3, DELAY);
  }

  /**
   * Submit question 3
   */
  function submit3() {
    let answer = document.getElementById("answer3").value;
    let correct = document.querySelector("#question3 > p");
    if (answer.toLowerCase() === correct.textContent.toLowerCase()) {
      //correct.textContent = "Correct";
      let count = document.getElementById("score");
      count.textContent = parseInt(count.textContent) + 1;
    } else {
      //correct.textContent = "Incorrect";
    }
    const DELAY = 2000;
    setTimeout(changeQuestion4, DELAY);
  }

  /**
   * Submit question 4
   */
  function submit4() {
    let answer = document.getElementById("answer4").value;
    let correct = document.querySelector("#question4 > p");
    if (answer.toLowerCase() === correct.textContent.toLowerCase()) {
      //correct.textContent = "Correct";
      let count = document.getElementById("score");
      count.textContent = parseInt(count.textContent) + 1;
    } else {
      //correct.textContent = "Incorrect";
    }
    const DELAY = 2000;
    setTimeout(changeQuestion5, DELAY);
  }

  /**
   * Submit question 5
   */
  function submit5() {
    let answer = document.getElementById("answer5").value;
    let correct = document.querySelector("#question5 > p");
    if (answer.toLowerCase() === correct.textContent.toLowerCase()) {
      //correct.textContent = "Correct";
      let count = document.getElementById("score");
      count.textContent = parseInt(count.textContent) + 1;
    } else {
      //correct.textContent = "Incorrect";
    }
    const DELAY = 2000;
    setTimeout(displayResults, DELAY);
  }

  /**
   * Change question
   */
  function changeQuestion2() {
    document.getElementById("question1").classList.add("hidden");
    document.getElementById("question2").classList.remove("hidden");
  }

  /**
   * Change question
   */
  function changeQuestion3() {
    document.getElementById("question2").classList.add("hidden");
    document.getElementById("question3").classList.remove("hidden");
  }

  /**
   * Change question
   */
  function changeQuestion4() {
    document.getElementById("question3").classList.add("hidden");
    document.getElementById("question4").classList.remove("hidden");
  }

  /**
   * Change question
   */
  function changeQuestion5() {
    document.getElementById("question4").classList.add("hidden");
    document.getElementById("question5").classList.remove("hidden");
  }

  /**
   * Generate random numbers
   */
  function generateRandomQuestions() {
    let random1 = Math.floor(Math.random() * 10) + 1;
    let random2 = Math.floor(Math.random() * 20) + 31;
    let random3 = Math.floor(Math.random() * 10) + 21;
    let random4 = Math.floor(Math.random() * 10) + 11;
    let random5 = Math.floor(Math.random() * 20) + 31;
    generateQuestion1(random1);
    generateQuestion2(random2);
    generateQuestion3(random3);
    generateQuestion4(random4);
    generateQuestion5(random5);
  }

  /**
   * Gets data for question 1
   * @param {int} random - a random number
   */
  function generateQuestion1(random) {
    let url = SEARCH + random;
    fetch(url)
    .then(checkStatus)
      .then(resp => resp.json())
      .then(displayQuestion1)
      .catch(handleError);
  }

  /**
   * Display question 1
   * @param {JSON} json - the data for question 1
   */
  function displayQuestion1(json) {
    let h1 = document.querySelector("#question1 > h1");
    h1.textContent = json[0]["question"];
    let options = document.querySelectorAll("select option");
    let option1 = options[1];
    option1.textContent = json[0]["a"];
    let option2 = options[2];
    option2.textContent = json[0]["b"];
    let option3 = options[3];
    option3.textContent = json[0]["c"];
    let option4 = options[4];
    option4.textContent = json[0]["d"];
    let p = document.querySelector("#question1 > p");
    p.textContent = json[0]["answer"];
    p.classList.add("hidden");
  }

  /**
   * Gets data for question 2
   * @param {int} random - a random number
   */
  function generateQuestion2(random) {
    let url = SEARCH + random;
    fetch(url)
    .then(checkStatus)
      .then(resp => resp.json())
      .then(displayQuestion2)
      .catch(handleError);
  }

  /**
   * Display question 2
   * @param {JSON} json - the data for question 2
   */
  function displayQuestion2(json) {
    let h1 = document.querySelector("#question2 > h1");
    h1.textContent = json[0]["question"];
    let h2 = document.querySelector("#question2 > h2");
    h2.textContent = json[0]["a"];
    let p = document.querySelector("#question2 > p");
    p.textContent = json[0]["answer"];
    p.classList.add("hidden");
  }

  /**
   * Gets data for question 3
   * @param {int} random - a random number
   */
  function generateQuestion3(random) {
    let url = SEARCH + random;
    fetch(url)
    .then(checkStatus)
      .then(resp => resp.json())
      .then(displayQuestion3)
      .catch(handleError);
  }

  /**
   * Display question 3
   * @param {JSON} json - the data for question 3
   */
  function displayQuestion3(json) {
    let h1 = document.querySelector("#question3 > h1");
    h1.textContent = json[0]["question"];
    let options = document.querySelectorAll("#question3 h2");
    let option1 = options[0];
    option1.textContent = json[0]["a"];
    let option2 = options[1];
    option2.textContent = json[0]["b"];
    let option3 = options[2];
    option3.textContent = json[0]["c"];
    let option4 = options[3];
    option4.textContent = json[0]["d"];
    let p = document.querySelector("#question3 > p");
    p.textContent = json[0]["answer"];
    p.classList.add("hidden");
  }

  /**
   * Gets data for question 4
   * @param {int} random - a random number
   */
  function generateQuestion4(random) {
    let url = SEARCH + random;
    fetch(url)
    .then(checkStatus)
      .then(resp => resp.json())
      .then(displayQuestion4)
      .catch(handleError);
  }

  /**
   * Display question 4
   * @param {JSON} json - the data for question 4
   */
  function displayQuestion4(json) {
    let h1 = document.querySelector("#question4 > h1");
    h1.textContent = json[0]["question"];
    let p = document.querySelector("#question14> p");
    p.textContent = json[0]["answer"];
    p.classList.add("hidden");
  }

  /**
   * Gets data for question 5
   * @param {int} random - a random number
   */
  function generateQuestion5(random) {
    let url = SEARCH + random;
    fetch(url)
    .then(checkStatus)
      .then(resp => resp.json())
      .then(displayQuestion5)
      .catch(handleError);
  }

  /**
   * Display question 5
   * @param {JSON} json - the data for question 5
   */
  function displayQuestion5(json) {
    let h1 = document.querySelector("#question5 > h1");
    h1.textContent = json[0]["question"];
    let h2 = document.querySelector("#question5 > h2");
    h2.textContent = json[0]["a"];
    let p = document.querySelector("#question5 > p");
    p.textContent = json[0]["answer"];
    p.classList.add("hidden");
  }

  /**
   * Handles error
   */
  function handleError() {
  }

  /**
   * Displays the results
   */
  function displayResults() {
    document.getElementById("question5").classList.add("hidden");
    if (document.getElementById("results").classList.contains("hidden")) {
      document.getElementById("results").classList.remove("hidden");
      document.getElementById("error").classList.add("hidden");
    }
  }

  /**
   * Returns the response if valid, error message if not
   * @param {string} response - the response to check
   * @returns {object} response if ok, error if not.
   */
  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Error in request: " + response.statusText);
    } else {
      return response;
    }
  }
})();