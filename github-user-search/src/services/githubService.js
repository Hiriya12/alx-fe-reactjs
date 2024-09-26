import axios from 'axios';

export const fetchUserData = async (username, location, minRepos, page) => {
    const query = `${username} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>=${minRepos}` : ''}`.trim();
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}`);
    return response.data;
};