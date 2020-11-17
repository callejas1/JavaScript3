'use strict';
import { bodyStructure } from './util/mainDOM.js';
import { getOptionList } from './util/getOptionList.js';
import { requestRepositories } from './util/requestRepositories.js';
import { addRepoToDOM } from './util/addRepoToDOM.js';
import { fetchContributors } from './util/fetchContributors.js';

// Call main function on page load
window.onload = async () => {
  try {
    // DOM elements
    bodyStructure();
    // shorthand for select tag inside the body
    const selectElement = document.getElementById('repo-list');
    // get fetched data from the imported 'requestRepositories'
    const fetchData = await requestRepositories();
    // shorthand for sorted & mapped elements from fetched data
    const sortedRepos = getOptionList(fetchData);
    // event listener activates the repository info display and contributors details
    selectElement.addEventListener('change', async (e) => {
      const selectedRepoDetails = addRepoToDOM(sortedRepos[e.target.value]);
      // pass selected repo value to fetch new API request for contributors details
      await fetchContributors(selectedRepoDetails);
    });
  } catch (e) {
    document.body.innerHTML = `Oops... ${e}`;
  }
};
