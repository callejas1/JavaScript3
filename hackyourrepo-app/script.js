// Here are the requirements:

// Remove the HTML elements you created last week, and only keep the <script> tag (you can keep the styling)
// Recreate all the HTML elements using JavaScript
// Populate the <select> with options. Use the data fetched from the GitHub API, using this URL:
// const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
// When a user changes the option in the <select> tag, listen to that "change" event and make an HTTP Request to the GitHub API to get repository-specific data. Read the documentation to find out which URL you need to use: GitHub API Documentation
// When the repository-specific has been fetched, populate the right columns: contributors and repository details.
// If there's an error in the HTTP Request, display the following:
// HTTP Error

// Create a main function that will execute all of your functions only when the window has fully loaded
'use strict';

function main() {
  document.body.innerHTML = `
  <main>
      <header>
        <h2>HYF Repositories</h2>
        <select name="HYf" id="repo-list">
        <option selected disabled>--Choose an option--</option>
        </select>
      </header>
    <section class="container">
      <section id="repoInfoDisplay" class="repo-container">
        <table id="tableRepoData">
          <tbody>
            <tr>
              <td><strong>Repository: </strong></td>
            </tr>
            <tr>
            <td><strong>Description: </strong></td>
            </tr>
            <tr>
            <td><strong>Forks: </strong></td>
            </tr>
            <tr>
            <td><strong>Updated: </strong></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="contributorsInfoDisplay" class="repo-container">
        <div>
          <p class="contributor-header">CONTRIBUTORS</p>
        </div>
        <div id="contributorsTable">
        </div>
      </section>
    </section>
    <footer>
      <p>HackYourRepo <strong>II</strong> by <a href="https://github.com/callejas1" target="_blank" class="my-github">Yoselyn Callejas</a></p>
    </footer>
  </main>

`;

  // Get reference DOM elements
  const repoContainer = document.getElementById('repoInfoDisplay');
  const contributorsContainer = document.getElementById(
    'contributorsInfoDisplay',
  );
  const contributorsDiv = document.getElementById('contributorsTable');
  const tableData = document.getElementById('tableRepoData');
  const selectElement = document.getElementById('repo-list');

  function requestRepositories() {
    // GitHub Repo API
    const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
    fetch(url)
      .then((response) => {
        // Send response if status OK
        if (response.ok) {
          return response.json();
        } else {
          // Display error if there's a problem with request
          repoContainer.innerHTML = 'Network request failed';
          repoContainer.style.color = '#841b2d';
          repoContainer.style.background = '#E68495';
        }
      })
      .then((data) => {
        // Pass data as argument to use and append to DOM in the getNames function
        getNames(data);
      })
      //
      .catch((err) => {
        // handle error (not sure if this is ok also for this network error)
        const error = new Error(err);
        repoContainer.innerHTML = error;
        repoContainer.style.color = '#841b2d';
        repoContainer.style.background = '#E68495';
      });
  }

  function getNames(repoInfo) {
    // sort repoInfo list in alphabetical order
    repoInfo.sort((a, b) => a.name.localeCompare(b.name));
    repoInfo.forEach((element, index) => {
      const optionElements = document.createElement('option');
      optionElements.classList = 'options';
      optionElements.value = index;
      optionElements.innerHTML = element.name;
      selectElement.appendChild(optionElements);
      contributorsContainer.appendChild(contributorsDiv);
      repoContainer.appendChild(tableData);
      selectElement.addEventListener('change', (e) => {
        if (e.target.value === optionElements.value) {
          // once element has been selected, fetch each contributor's information
          getContributors(element);
          // parse date retrieved from request and replace the T & Z letters (general instances && case insensitive) with a space.
          const date = element.updated_at.replace(/[tz]/gi, ' ');
          tableData.innerHTML = `
            <tbody>
              <tr> <td> <strong>Repository: </strong>
              <a href="${element.html_url}" target="_blank">${element.name}</a></td> </tr>
              <tr> <td> <strong>Description: </strong>${element.description} </td> </tr>
              <tr> <td> <strong>Forks: </strong> ${element.forks} </td> </tr>
              <tr> <td> <strong>Updated: </strong> ${date}</td> </tr>
            </tbody> `;
        }
      });
    });
  }

  function getContributors(element) {
    const getContributors = `https://api.github.com/repos/HackYourFuture/${element.name}/contributors`;
    fetch(getContributors)
      .then((response2) => {
        if (response2.ok) {
          return response2.json();
        } else {
          contributorsContainer.innerHTML = 'Network request failed';
          contributorsContainer.style.color = '#841b2d';
          contributorsContainer.style.background = '#E68495';
        }
      })
      .then((data2) => {
        let contributorsDivNode = document.createElement('div');
        contributorsDivNode = '';
        data2.forEach((element2) => {
          contributorsDivNode += `
          <div class="contributors-table">
            <img src="${element2.avatar_url}"> 
            <a class="usernames" href="${element2.html_url}" target="_blank">${element2.login}</a>
            <div class="contributions">${element2.contributions}</div>
          </div>`;
          contributorsDiv.innerHTML = contributorsDivNode;
        });
      })
      .catch((err) => {
        const error = new Error(err);
        contributorsContainer.innerHTML = error;
        contributorsContainer.style.color = '#841b2d';
        contributorsContainer.style.background = '#E68495';
      });
  }
  requestRepositories();
}

// Call main function on page load
window.onload = main();
