// This function will take the name of the repo and the index from the selected option value
export function addRepoToDOM(element, i) {
  // Access table from DOM
  const tableData = document.getElementById('tableRepoData');

  // replace the T & Z letters (general instances && case insensitive) with a space.
  const date = element[i].updated_at.replace(/[tz]/gi, ' ');
  tableData.innerHTML = `
    <tbody>
      <tr> <td> <strong>Repository: </strong>
      <a href="${element[i].html_url}" target="_blank">${element[i].name}</a></td> </tr>
      <tr> <td> <strong>Description: </strong>${element[i].description} </td> </tr>
      <tr> <td> <strong>Forks: </strong> ${element[i].forks} </td> </tr>
      <tr> <td> <strong>Updated: </strong> ${date}</td> </tr>
    </tbody> `;
  // return element name for fetching contributors details
  return element[i];
}
