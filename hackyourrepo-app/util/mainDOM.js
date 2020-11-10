export function bodyStructure() {
  return (document.body.innerHTML += `
  <main>
      <header>
        <h2>HYF Repositories</h2>
        <select name="HYf" id="repo-list">
        <option selected disabled>--Choose an option--</option>
        </select>
      </header>
    <section class="container">
      <section id="repoInfoDisplay" class="repo-container">
        <table id="tableRepoData">
          <tbody>
            <tr>
              <td><strong>Repository: </strong></td>
            </tr>
            <tr>
            <td><strong>Description: </strong></td>
            </tr>
            <tr>
            <td><strong>Forks: </strong></td>
            </tr>
            <tr>
            <td><strong>Updated: </strong></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="contributorsInfoDisplay" class="repo-container">
        <div>
          <p class="contributor-header">CONTRIBUTORS</p>
        </div>
        <div id="contributorsTable"></div>
        <div id="pagination" class="pagination-icons">
        </div>
      </section>
    </section>
    <footer>
      <p>HackYourRepo <strong>II</strong> by <a href="https://github.com/callejas1" target="_blank" class="my-github">Yoselyn Callejas</a></p>
    </footer>
  </main>
`);
}
