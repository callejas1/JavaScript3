import { displayContributors } from './displayContributors.js';
import { setUpPages } from './setUpPages.js';

// arr holds the data of all contributors
export function pagination(arr) {
  let currentPage = 1;
  const rows = 5; // max contributors per page
  // Access DOM elements to append contributors info
  const contributorsDiv = document.getElementById('contributorsTable');
  // previous and next page button (+ classes from font awesome)
  const previous = document.createElement('i');
  const next = document.createElement('i');
  previous.classList = 'fas fa-chevron-circle-left fa-2x';
  next.classList = 'fas fa-chevron-circle-right fa-2x';
  // round up to get all pages even if the last one does not contain 5 items
  const pageCount = Math.ceil(arr.length / rows);

  // do not display previous and next btn if only 1 page
  if (pageCount <= 1) {
    previous.style.display = 'none';
    next.style.display = 'none';
  }

  // Adding one to currentPage to show the previous 5 contributors, if it's the last page, it won't go further
  next.addEventListener('click', () => {
    if (currentPage < pageCount) {
      const btn = document.querySelector('.active');
      btn.classList.remove('active'); // remove the darker background on page number that is no longer being viewed
      currentPage++;
      btn.nextSibling.classList.add('active'); // add the active class to the next page instead
      displayContributors(arr, contributorsDiv, rows, currentPage);
    }
  });

  // Subtracting one to currentPage to show the previous 5 contributors, if it's the 1st page, it won't go back
  previous.addEventListener('click', () => {
    if (currentPage !== 1) {
      const btn = document.querySelector('.active');
      btn.classList.remove('active'); // remove css for active button if page's no longer being viewed
      currentPage--;
      btn.previousSibling.classList.add('active'); // add the active class to the previous number button
      displayContributors(arr, contributorsDiv, rows, currentPage);
    }
  });

  displayContributors(arr, contributorsDiv, rows, currentPage);
  setUpPages(arr, previous, next, currentPage);
}
