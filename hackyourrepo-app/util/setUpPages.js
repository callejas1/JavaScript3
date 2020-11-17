import { paginationBtns } from './paginationBtns.js';

// get array elements, the contributorsDiv and rows allowed per page
export const setUpPages = (items, previous, next, currentPage) => {
  const pageCount = Math.ceil(items.length / 5);
  // buttons container
  const container = document.getElementById('pagination');
  container.innerHTML = '';
  container.appendChild(previous);
  // get the total page count to know how many buttons to add to DOM
  for (let i = 1; i < pageCount + 1; i++) {
    const btns = paginationBtns(i, items, currentPage);
    container.appendChild(btns);
  }
  container.appendChild(next);
};
