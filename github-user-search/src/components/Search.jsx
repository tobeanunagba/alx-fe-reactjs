import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Renamed import

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]); // Corrected variable
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  const handleInputChange = (e) => {
    const { name, value } = e.target.value;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData([]);
    setPage(1);

    try {
      const data = await fetchUserData(username, location, minRepos, page, perPage); // Updated function
      setUserData(data.items || []);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    setError(null);
    const nextPage = page + 1;

    try {
      const data = await fetchUserData(username, location, minRepos, nextPage, perPage); // Updated function
      setUserData((prevData) => [...prevData, ...(data.items || [])]);
      setPage(nextPage);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location (optional)"
          value={location}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData.length > 0 && (
        <div className="mt-4">
          {userData.map((user) => (
            <div key={user.id} className="border p-4 mb-2 rounded">
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full mb-2" />
              <h2 className="text-lg font-bold">{user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          ))}
          <button onClick={loadMore} className="mt-4 w-full bg-blue-500 text-white p-2 rounded">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;

