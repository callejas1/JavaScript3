import { displayContributors } from './displayContributors.js';
// arr holds the data of all contributors
export function pagination(arr) {
  let currentPage = 1;
  const rows = 5; // max contributors per page

  // Access DOM elements to append contributors info
  const contributorsDiv = document.getElementById('contributorsTable');
  // buttons container
  const wrapper = document.getElementById('pagination');
  // previous and next page button (+ classes from font awesome)
  const previous = document.createElement('i');
  const next = document.createElement('i');
  previous.classList = 'fas fa-chevron-circle-left fa-2x';
  next.classList = 'fas fa-chevron-circle-right fa-2x';
  // round up to get all pages even if the last one does not contain 5 items
  const pageCount = Math.ceil(arr.length / rows);
  // get array elements, the contributorsDiv and rows allowed per page
  const setUpPages = (items, container, rowsPerPage) => {
    container.innerHTML = '';
    container.appendChild(previous);
    // get the total page count to know how many buttons to add to DOM
    for (let i = 1; i < pageCount + 1; i++) {
      const btns = paginationBtns(i, items);
      container.appendChild(btns);
    }
    container.appendChild(next);
  };
  // create each number button and event listener for each one
  const paginationBtns = (page, items) => {
    const btn = document.createElement('button');
    btn.classList = 'btn-number';
    btn.innerText = page;
    if (currentPage === page) btn.classList = 'btn-number active'; // this will change the color if selected/current page is being viewed

    btn.addEventListener('click', () => {
      currentPage = page;
      displayContributors(items, contributorsDiv, rows, currentPage); // add elements to DOM (only the 5 contributors per page)
      const currentNumber = document.querySelector('.pagination-icons .active');
      currentNumber.classList.remove('active');
      btn.classList.add('active');
    });

    // Subtracting one to currentPage to show the previous 5 contributors, if it's the 1st page, it won't go back
    previous.addEventListener('click', () => {
      if (currentPage === page && currentPage !== 1) {
        btn.classList.remove('active'); // remove css for active button if page's no longer being viewed
        currentPage--;
        btn.previousSibling.classList.add('active'); // add the active class to the previous number button
        displayContributors(items, contributorsDiv, rows, currentPage);
      }
    });

    return btn;
  };

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

  displayContributors(arr, contributorsDiv, rows, currentPage);
  setUpPages(arr, wrapper, rows);
}
