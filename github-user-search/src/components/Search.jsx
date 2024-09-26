import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setPage(1); 
        try {
            const data = await fetchUserData(username, location, minRepos, 1);
            setUsers(data.items || []);
            setTotalCount(data.total_count);
        } catch (err) {
            setError("Looks like we can't find any users");
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    const loadMore = async () => {
        setLoading(true);
        try {
            const nextPage = page + 1;
            const data = await fetchUserData(username, location, minRepos, nextPage);
            setUsers(prevUsers => [...prevUsers, ...(data.items || [])]);
            setTotalCount(data.total_count);
            setPage(nextPage);
        } catch (err) {
            setError("Error loading more users");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    placeholder="Minimum repositories"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="border p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="mt-4">
                {users.map(user => (
                    <div key={user.id} className="border p-4 rounded mb-2">
                        <h3 className="text-lg">{user.login}</h3>
                        <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="50" />
                        <p>Location: {user.location || 'Not specified'}</p>
                        <p>Repositories: {user.public_repos}</p>
                        <p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                View Profile
                            </a>
                        </p>
                    </div>
                ))}
            </div>

            {users.length > 0 && users.length < totalCount && (
                <button onClick={loadMore} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Load More
                </button>
            )}
        </div>
    );
};

export default Search;