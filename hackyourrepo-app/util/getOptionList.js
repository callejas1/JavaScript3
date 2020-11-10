// This function will populate the drop down list containing all Repository names
// When called in main, the result from the fetched API response will be passed as an argument

export function getOptionList(repoInfo) {
  // Get reference for DOM element (select tag)
  const selectElement = document.getElementById('repo-list');
  // sort repoInfo list in alphabetical order and append options to dropdown
  const sortedRepos = repoInfo
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((element, index) => {
      const optionElements = `<option class"options" value="${index}">${element.name}</option>`;
      selectElement.innerHTML += optionElements;
      // return element to inject in main
      return element;
    });
  return sortedRepos;
}
