// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(username);
            setUser(data);
        } catch (err) {
            setError("Looks like we cant find the user");
            setUser(null); // Clear user state on error
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {user && (
                <div>
                    <h3>{user.name} ({user.login})</h3>
                    <img src={user.avatar_url} alt={`${user.name}'s avatar`} width="100" />
                    <p>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;