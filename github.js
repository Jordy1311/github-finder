class GitHub {
    constructor() {
        this.client_id = "20a7d4578dcf5032a7fa";
        this.client_secret = "3ef26235deb2850110cb79d8c90f9e3a9c729e2a";
    }

    // get user
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }

    }
}