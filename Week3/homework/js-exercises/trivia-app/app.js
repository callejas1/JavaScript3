'use strict';

document.body.innerHTML = `
  <main>

    <section class="header">

      <h1 class="trivia-heading">Let's play some Trivia!</h1>
      <h4 class="advise-heading">Try your best to figure out the answer. If you really have no clue, click on the question to reveal the answer...</h4>
    
    </section>

    <section id="questionContainer" class="questionsHolder">
    </section>

  </main>
`;

async function fetchData(url) {
  // get a random integer to choose from fetched results array
  // const chooseRandom = Math.floor(Math.random() * 5);

  try {
    // fetch trivia questions
    const fetchAPI = await fetch(url);

    // Continue if response is ok
    if (fetchAPI.ok) {
      const convertedResponse = await fetchAPI.json(); // convert to JS object
      const results = convertedResponse.results; // shorthand for JS object results

      // Iterate through results fetched to get both Question and Answer and be able to append to DOM
      results.forEach((res) => {
        // get a question and an answer for each result retrieved from fetchAPI
        const q = res.question;
        const a = res.correct_answer;

        // pass variables into function to create DOM elements and display trivia Q&A
        appendToDOM(q, a);
      });
    } else {
      // throw error if not ok
      throw new Error('Request failed!');
    }
  } catch (error) {
    // handle error if something is wrong in the try block
    console.log(error);
  }
}

async function appendToDOM(q, a) {
  try {
    // Q&A container
    const questionContainer = document.getElementById('questionContainer');
    // question container
    const questionBtn = document.createElement('button');
    // answer container
    const pTag = document.createElement('p');
    // insert question and answer from fetched API
    questionBtn.innerHTML = q;
    pTag.innerHTML = a;
    questionBtn.classList = 'questionBtn';
    pTag.classList = 'answerElement';
    // set initial display value to none (to hide it)
    pTag.style.display = 'none';
    // add question and answer to container
    questionContainer.append(questionBtn, pTag);

    // event function
    const fireEvent = () => {
      // display answer on click event and if display is already none
      if (pTag.style.display === 'none') {
        pTag.style.display = 'block';
      } else {
        // hide if clicked again && display style already block
        pTag.style.display = 'none';
      }
      // apply transition to display max height of <p> tag
      if (pTag.style.maxHeight) {
        pTag.style.maxHeight = null;
      } else {
        pTag.style.maxHeight = pTag.scrollHeight + 'px';
      }
    };
    // fire event on click
    questionBtn.addEventListener('click', fireEvent);
  } catch (err) {
    console.log(err);
  }
}
fetchData('https://opentdb.com/api.php?amount=5');
