export const displayContributors = (items, container, rowsPerPage, page) => {
  const contributorsDiv = document.getElementById('contributorsTable');

  container.innerHTML = '';
  page--;

  let start = rowsPerPage * page;
  let end = start + rowsPerPage;
  let paginatedItems = items.slice(start, end);

  for (const item of paginatedItems) {
    // this is where the username, avatar and contributions will go
    let contributorsDivNode = document.createElement('div');
    contributorsDivNode.innerHTML = `
        <div class="contributors-card">
          <img src="${item.avatar_url}">
          <a class="usernames" href="${item.html_url}" target="_blank">${item.login}</a>
          <div class="contributions">${item.contributions}</div>
        </div>
      `;
    contributorsDiv.append(contributorsDivNode);
  }
};
