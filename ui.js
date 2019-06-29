class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // display profile in ui
  renderProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
    <h3 class="page-heading mb-3 mt-3">Profile</h3>
    <div class="card card-body mb-5">
    <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-3" src="${user.avatar_url}">
            <a href="${
              user.html_url
            }" target="_blank" class="btn btn-primary btn-block mb-4">${
      user.login
    } <i class="fa fa-github"></i></a>
        </div>
        <div class="col-md-9">
            <span class="badge">REPOS ${user.public_repos}</span>
            <span class="badge">GISTS ${9}</span>
            <span class="badge">FOLLOWERS ${user.followers}</span>
            <span class="badge">FOLLOWING ${user.following}</span>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">🏢 ${user.company}</li>
                <li class="list-group-item">🖥 <a href="${
                  user.blog
                }" target="_blank">${user.blog}</a></li>
                <li class="list-group-item">🏠 ${user.location}</li>
                <li class="list-group-item">📅
                ${new Date(user.created_at).toLocaleString("en-us", {
                  month: "long"
                })} ${new Date(user.created_at).getFullYear()}</li>
            </ul>
        </div>
    </div>
</div>
<h3 class="page-heading mb-3 mt-3">Latest Repos</h3>
<div id="repos"></div>
`;
  }
  // show user repos
  showRepos(repos) {
    let output = "";
    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                <a class="badge pull-left" href="${
                  repo.html_url
                }" target="_blank">${repo.name.toUpperCase()}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge">STARS ${repo.stargazers_count}</span>
                <span class="badge badge">WATCHERS ${repo.watchers_count}</span>
                <span class="badge badge">FORKS ${repo.forks_count}</span>
                </div>
            </div>
        </div>
        `;
    });
    // output repos
    document.getElementById("repos").innerHTML = output;
  }

  // show alert message
  showAlert(message, className) {
    //clear remaining alerts
    this.clearAlert();
    // create div
    const div = document.createElement("div");
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector(".searchContainer");
    // get search box
    const search = document.querySelector(".search");
    //insert alert
    container.insertBefore(div, search);
    // timeout after three seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear profile if input empty
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
