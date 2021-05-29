// init GitHub
const github = new GitHub;
// init UI
const ui = new UI;


// search input
const searchUser = document.getElementById("searchUser");

// search input event listener
searchUser.addEventListener("keyup", (event) => {
    // get input text
    const userText = event.target.value;
    if(userText !== "") {
        // make HTTP call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === "Not Found") {
                    // show alert

                } else {
                    // show profile
                    ui.showProfile(data.profile);
                }
            })
    } else {
        // clear profile

    }
})