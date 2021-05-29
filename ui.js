class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    // display profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-outline-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-pill badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-pill badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-pill badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-pill badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // show alert message in UI
    showAlert(message, className) {
        // clear any remaining alerts
        this.clearAlert();
        // create div
        const div = document.createElement("div");
        // add classes
        div.className = className;
        // add id
        div.id = "alert"
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent element
        const container = document.getElementById("alertContainer");
        // insert alert
        container.appendChild(div);

        // timeout after 2 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    // clear alert message
    clearAlert() {
        const currentAlert = document.getElementById("alert");
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // clear profile from UI
    clearProfile() {
        this.profile.innerHTML = "";
        this.clearAlert();
    }
}