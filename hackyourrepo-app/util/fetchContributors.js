// This function takes the selected repository's value to fetch a new request for contributors detail
// and pass the new contributors array as an argument for pagination purposes
import { pagination } from './pagination.js';
export async function fetchContributors(element) {
  try {
    // url shorthand
    const getContributors = `https://api.github.com/repos/HackYourFuture/${element.name}/contributors`;
    // Get contributors JS object from each selected option
    const fetchedContributors = await fetch(getContributors);
    // Continue if fetch request status ok
    if (fetchedContributors.ok) {
      const response = await fetchedContributors.json();
      return pagination(response);
    } else {
      throw new Error('Request Failed.');
    }
  } catch (err) {
    // This container will display error, if one gets caught.
    const contributorsContainer = document.getElementById(
      'contributorsInfoDisplay',
    );
    // append error from failed request
    contributorsContainer.innerHTML = err;
    contributorsContainer.style.color = '#841b2d';
    contributorsContainer.style.background = '#E68495';
  }
}
