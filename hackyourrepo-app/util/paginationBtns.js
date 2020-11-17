import { displayContributors } from './displayContributors.js';
// create each number button and event listener for each one
export const paginationBtns = (page, items, currentPage) => {
  const rows = 5;
  const pageCount = Math.ceil(items.length / rows);
  const contributorsDiv = document.getElementById('contributorsTable');
  const btn = document.createElement('button');
  btn.classList = 'btn-number';
  btn.innerText = page;
  // this will change the color if selected/current page is being viewed
  if (currentPage === page) {
    btn.classList = 'btn-number active';
  }
  // do not display page number btn if only 1 page
  if (pageCount <= 1) {
    btn.style.display = 'none';
  }
  btn.addEventListener('click', () => {
    currentPage = page;
    displayContributors(items, contributorsDiv, rows, currentPage); // add elements to DOM (only the 5 contributors per page)
    const currentNumber = document.querySelector('.pagination-icons .active');
    currentNumber.classList.remove('active');
    btn.classList.add('active');
  });

  return btn;
};
