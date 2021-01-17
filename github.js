class GitHub {
    constructor() {
        this.client_id = '392c2c1e17d766b4f89c';
        this.client_secret = '3bdc0e770129a53e81fca4e3e27c6893c9304031';
    };

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile
        };
    };
};