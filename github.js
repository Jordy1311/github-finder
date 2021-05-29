class GitHub {
    constructor() {
        this.client_id = "20a7d4578dcf5032a7fa";
        this.client_secret = "b2f4da7228cdd4af46d07d7c4cec90b140208a64";
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