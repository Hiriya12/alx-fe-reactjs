// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null); // Reset user data on new search

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      // Check if the error is due to 404 (user not found)
      if (err.response && err.response.status === 404) {
        setError("Looks like we can't find the user"); // Specific error message
      } else {
        setError("An error occurred. Please try again."); // Generic error message
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>} {/* Display error message */}
      {userData && (
        <div>
          <h3>{userData.login}</h3> {/* Display the login name */}
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;