const github = new GitHub();
const ui = new UI();

// search input
const searchUser = document.getElementById("searchUser");

// search input event listener
searchUser.addEventListener("keyup", e => {
  // get input text
  const userText = e.target.value;
  // if input is empty, proceed
  if (userText !== "") {
    // make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("USER NOT FOUND", "alert alert-danger");
      } else {
        // show profile
        ui.renderProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
