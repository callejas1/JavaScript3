// This function will take the name of the repo and the index from the selected option value
export function addRepoToDOM(element) {
  // Access table from DOM
  const tableData = document.getElementById('tableRepoData');

  // replace the T & Z letters (general instances && case insensitive) with a space.
  const date = element.updated_at.replace(/[tz]/gi, ' ');
  tableData.innerHTML = `
    <tbody>
      <tr> <td> <strong>Repository: </strong>
      <a href="${element.html_url}" target="_blank">${element.name}</a></td> </tr>
      <tr> <td> <strong>Description: </strong>${element.description} </td> </tr>
      <tr> <td> <strong>Forks: </strong> ${element.forks} </td> </tr>
      <tr> <td> <strong>Updated: </strong> ${date}</td> </tr>
    </tbody> `;
  // return element name for fetching contributors details
  return element;
}
