export async function requestRepositories() {
  //repo container DOM
  const repoContainer = document.getElementById('repoInfoDisplay');

  try {
    // GitHub Repo API
    const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
    // fetch API request
    const fetchRepo = await fetch(url);
    // Send response if status OK
    if (fetchRepo.ok) {
      // convert from JSON to JS object
      const response = await fetchRepo.json();
      return response;
    } else {
      // throw error if there's a problem with request
      throw new Error();
    }
  } catch (err) {
    repoContainer.innerHTML = err;
    repoContainer.style.color = '#841b2d';
    repoContainer.style.background = '#E68495';
  }
}