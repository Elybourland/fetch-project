class GitHub {
    constructor() {
        this.client_id = '392c2c1e17d766b4f89c';
        this.client_secret = '3bdc0e770129a53e81fca4e3e27c6893c9304031';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    };

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    };
};